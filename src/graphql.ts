
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateAdminInput {
    email: string;
    name: string;
    password: string;
}

export class UpdateAdminInput {
    id: number;
    email: string;
    name: string;
    password: string;
}

export class Admin {
    id: number;
    createdAt?: Nullable<DateTime>;
    email: string;
    name: string;
    password: string;
    rents?: Nullable<Rent[]>;
}

export class Rent {
    id: number;
    createdAt?: Nullable<DateTime>;
    status: string;
    admin?: Nullable<Admin>;
    adminId: string;
    organisation: string;
    tools?: Nullable<Tool[]>;
}

export class Tool {
    id: number;
    createdAt?: Nullable<DateTime>;
    name: string;
    desc: string;
    image: string;
    totalStock: number;
    priceHour: number;
    priceDay: number;
    rents?: Nullable<Rent[]>;
}

export abstract class IQuery {
    abstract admins(): Nullable<Admin>[] | Promise<Nullable<Admin>[]>;

    abstract admin(id: number): Nullable<Admin> | Promise<Nullable<Admin>>;
}

export abstract class IMutation {
    abstract createAdmin(createAdminInput: CreateAdminInput): Admin | Promise<Admin>;

    abstract updateAdmin(id: number, updateAdminInput: UpdateAdminInput): Admin | Promise<Admin>;

    abstract removeAdmin(id: number): Nullable<Admin> | Promise<Nullable<Admin>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
