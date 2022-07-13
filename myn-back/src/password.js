import bcrypt from 'bcrypt'

export const hash_password = async (password) => {
    const hash = await bcrypt.hash(password, 10)
    return hash
}

export const compare_password =  (password, password_hash) => {
    const compare = bcrypt.compare(password, password_hash)
    return compare
}