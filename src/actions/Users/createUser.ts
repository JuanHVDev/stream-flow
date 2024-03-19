"use server";
import prisma from "@/lib/db";

export const createUser = async (
    name: string,
    password: string,
    email: string
) => {
    try {
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                password,
            },
        });
        return {
            success: true,
            user: newUser,
        };
    } catch (error) {
        return {
            success: false,
            message: "No se ha podido registrar el usuario",
        };
    }
};
