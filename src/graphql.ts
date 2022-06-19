
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

export class CreateRentInput {
    adminId: string;
    tools: number[];
    rentName: string;
    rentNim: string;
    rentPhone: string;
    rentLineId: string;
    organisation: string;
    fromDate: DateTime;
    expectedReturnDate: DateTime;
    status: string;
}

export class UpdateRentInput {
    id: number;
    adminId: string;
    tools: number[];
    rentName: string;
    rentNim: string;
    rentPhone: string;
    rentLineId: string;
    organisation: string;
    fromDate: DateTime;
    expectedReturnDate: DateTime;
    status: string;
    totalPrice?: Nullable<number>;
    fine?: Nullable<number>;
    pickupName?: Nullable<string>;
    pickupNim?: Nullable<string>;
    returnName?: Nullable<string>;
    returnNim?: Nullable<string>;
}

export class CreateToolInput {
    name: string;
    desc: string;
    image: string;
    activated: boolean;
    totalStock: number;
    priceHour: number;
    priceDay: number;
}

export class UpdateToolInput {
    id: number;
    name: string;
    desc: string;
    image: string;
    activated: boolean;
    totalStock: number;
    priceHour: number;
    priceDay: number;
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
    admin?: Nullable<Admin>;
    adminId: string;
    tools: number[];
    rentName: string;
    rentNim: string;
    rentPhone: string;
    rentLineId: string;
    organisation: string;
    fromDate: DateTime;
    expectedReturnDate: DateTime;
    totalPrice?: Nullable<number>;
    status: string;
    fine?: Nullable<number>;
    pickupName?: Nullable<string>;
    pickupNim?: Nullable<string>;
    returnName?: Nullable<string>;
    returnNim?: Nullable<string>;
}

export class Tool {
    id: number;
    createdAt?: Nullable<DateTime>;
    name: string;
    desc: string;
    image: string;
    activated: boolean;
    totalStock: number;
    priceHour: number;
    priceDay: number;
}

export abstract class IQuery {
    abstract admins(): Nullable<Admin>[] | Promise<Nullable<Admin>[]>;

    abstract admin(id: number): Nullable<Admin> | Promise<Nullable<Admin>>;

    abstract rents(): Nullable<Rent>[] | Promise<Nullable<Rent>[]>;

    abstract rent(id: number): Nullable<Rent> | Promise<Nullable<Rent>>;

    abstract tools(): Nullable<Tool>[] | Promise<Nullable<Tool>[]>;

    abstract tool(id: number): Nullable<Tool> | Promise<Nullable<Tool>>;
}

export abstract class IMutation {
    abstract createAdmin(createAdminInput: CreateAdminInput): Admin | Promise<Admin>;

    abstract updateAdmin(updateAdminInput: UpdateAdminInput): Admin | Promise<Admin>;

    abstract removeAdmin(id: number): Nullable<Admin> | Promise<Nullable<Admin>>;

    abstract createRent(createRentInput: CreateRentInput): Rent | Promise<Rent>;

    abstract updateRent(updateRentInput: UpdateRentInput): Rent | Promise<Rent>;

    abstract removeRent(id: number): Nullable<Rent> | Promise<Nullable<Rent>>;

    abstract createTool(createToolInput: CreateToolInput): Tool | Promise<Tool>;

    abstract updateTool(updateToolInput: UpdateToolInput): Tool | Promise<Tool>;

    abstract removeTool(id: number): Nullable<Tool> | Promise<Nullable<Tool>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
