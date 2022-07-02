
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

export class CreateArticleInput {
    title: string;
    desc: string;
    imageUrl: string;
    publishedDate: DateTime;
    duration: number;
    link: string;
}

export class UpdateArticleInput {
    id: number;
    title: string;
    desc: string;
    imageUrl: string;
    publishedDate: DateTime;
    duration: number;
    link: string;
}

export class LoginAdminInput {
    email: string;
    password: string;
}

export class CreateRentInput {
    tools: string;
    rentName: string;
    rentNim: string;
    rentPhone: string;
    rentLineId: string;
    organisation: string;
    fromDate: DateTime;
    expectedReturnDate: DateTime;
    status: string;
    totalPrice: number;
}

export class UpdateRentInput {
    id: number;
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
    returnDate?: Nullable<DateTime>;
}

export class CreateShopInput {
    title: string;
    imageUrl: string;
    link: string;
    price: number;
}

export class UpdateShopInput {
    id: number;
    title: string;
    imageUrl: string;
    link: string;
    price: number;
}

export class CreateToolInput {
    name: string;
    image: string;
    activated: boolean;
    totalStock: number;
    priceHour: number;
    priceDay: number;
}

export class UpdateToolInput {
    id: number;
    name: string;
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
}

export class AdminResponse {
    id: number;
    createdAt?: Nullable<DateTime>;
    email: string;
    name: string;
}

export abstract class IQuery {
    abstract admins(): Nullable<AdminResponse>[] | Promise<Nullable<AdminResponse>[]>;

    abstract admin(id: number): Nullable<AdminResponse> | Promise<Nullable<AdminResponse>>;

    abstract articles(): Nullable<Article>[] | Promise<Nullable<Article>[]>;

    abstract article(id: number): Nullable<Article> | Promise<Nullable<Article>>;

    abstract rents(): Nullable<Rent>[] | Promise<Nullable<Rent>[]>;

    abstract rentdates(): Nullable<RentDate>[] | Promise<Nullable<RentDate>[]>;

    abstract rent(id: number): Nullable<Rent> | Promise<Nullable<Rent>>;

    abstract shops(): Nullable<Shop>[] | Promise<Nullable<Shop>[]>;

    abstract shop(id: number): Nullable<Shop> | Promise<Nullable<Shop>>;

    abstract tools(): Nullable<Tool>[] | Promise<Nullable<Tool>[]>;

    abstract tool(id: number): Nullable<Tool> | Promise<Nullable<Tool>>;
}

export abstract class IMutation {
    abstract createAdmin(createAdminInput: CreateAdminInput): AdminResponse | Promise<AdminResponse>;

    abstract updateAdmin(updateAdminInput: UpdateAdminInput): AdminResponse | Promise<AdminResponse>;

    abstract removeAdmin(id: number): Nullable<AdminResponse> | Promise<Nullable<AdminResponse>>;

    abstract createArticle(createArticleInput: CreateArticleInput): Article | Promise<Article>;

    abstract updateArticle(updateArticleInput: UpdateArticleInput): Article | Promise<Article>;

    abstract removeArticle(id: number): Nullable<Article> | Promise<Nullable<Article>>;

    abstract login(createLoginInput: LoginAdminInput): LoginAdminResponse | Promise<LoginAdminResponse>;

    abstract createRent(createRentInput: CreateRentInput): Rent | Promise<Rent>;

    abstract updateRent(updateRentInput: UpdateRentInput): Rent | Promise<Rent>;

    abstract removeRent(id: number): Nullable<Rent> | Promise<Nullable<Rent>>;

    abstract createShop(createShopInput: CreateShopInput): Shop | Promise<Shop>;

    abstract updateShop(updateShopInput: UpdateShopInput): Shop | Promise<Shop>;

    abstract removeShop(id: number): Nullable<Shop> | Promise<Nullable<Shop>>;

    abstract createTool(createToolInput: CreateToolInput): Tool | Promise<Tool>;

    abstract updateTool(updateToolInput: UpdateToolInput): Tool | Promise<Tool>;

    abstract removeTool(id: number): Nullable<Tool> | Promise<Nullable<Tool>>;
}

export class Article {
    id: number;
    createdAt?: Nullable<DateTime>;
    title: string;
    desc: string;
    imageUrl: string;
    publishedDate: DateTime;
    duration: number;
    link: string;
}

export class AdminWithoutPassword {
    id: number;
    createdAt?: Nullable<DateTime>;
    email: string;
    name: string;
}

export class LoginAdminResponse {
    accessToken: string;
    admin: AdminWithoutPassword;
}

export class Rent {
    id: number;
    createdAt?: Nullable<DateTime>;
    tools: string;
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
    returnDate?: Nullable<DateTime>;
}

export class RentDate {
    id: number;
    createdAt?: Nullable<DateTime>;
    tools: string;
    fromDate: DateTime;
    expectedReturnDate: DateTime;
    status: string;
}

export class Shop {
    id: number;
    createdAt?: Nullable<DateTime>;
    title: string;
    imageUrl: string;
    link: string;
    price: number;
}

export class Tool {
    id: number;
    createdAt?: Nullable<DateTime>;
    name: string;
    image: string;
    activated: boolean;
    totalStock: number;
    priceHour: number;
    priceDay: number;
}

export type DateTime = any;
type Nullable<T> = T | null;
