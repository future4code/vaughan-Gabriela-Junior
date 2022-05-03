import * as bcrypt from 'bcryptjs';

export class HashManager{
    createHash = async (text: string): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds);
        return bcrypt.hash(text, salt)
    }

    compareHash = async (text: string, cypherText: string): Promise<boolean> => {
        return bcrypt.compare(text, cypherText)
    }
};