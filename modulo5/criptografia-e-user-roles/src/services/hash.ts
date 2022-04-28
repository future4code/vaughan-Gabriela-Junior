import * as bcrypt from 'bcryptjs';

export const generateHash = (plainText: string): string => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = bcrypt.genSaltSync(rounds);
    const result = bcrypt.hashSync(plainText, salt);
    return result
};

export const compareHash = (plainText: string, hash: string): boolean => {
    
    return bcrypt.compareSync(plainText, hash);
    
};