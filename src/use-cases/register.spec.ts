import { describe, it, expect, beforeEach } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists'

let userRepository: InMemoryUsersRepository
let sut: RegisterUseCase

describe('Register Use Case', () => {
  beforeEach(() => {
    userRepository = new InMemoryUsersRepository()
    sut = new RegisterUseCase(userRepository)
  })

  it('should be able to register', async () => {
    const { user } = await sut.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'senha123',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should hash user password upon registration', async () => {
    const { user } = await sut.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'senha123',
    })

    const isPasswordCorrectlyHashed = await compare(
      'senha123',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })

  it('should not be able to register with smae email twice', async () => {
    const email = 'johndoe@example.com'

    sut.execute({
      name: 'John Doe',
      email,
      password: 'senha123',
    })

    await expect(() =>
      sut.execute({
        name: 'John Doe',
        email,
        password: 'senha123',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
