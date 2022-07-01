import { BadRequestException } from '@nestjs/common';
import {
  CreateAdminInput,
  CreateArticleInput,
  CreateRentInput,
  CreateShopInput,
  CreateToolInput,
  LoginAdminInput,
  UpdateAdminInput,
  UpdateArticleInput,
  UpdateRentInput,
  UpdateShopInput,
  UpdateToolInput,
} from 'src/graphql';
import validator from 'validator';

export const validateRegisterInput = ({
  email,
  name,
  password,
}: CreateAdminInput) => {
  // all Cannot be empty
  if (
    validator.isEmpty(email) ||
    validator.isEmpty(name) ||
    validator.isEmpty(password)
  ) {
    throw new BadRequestException('Input must not be empty');
  }
  // check if email
  if (!validator.isEmail(email)) {
    throw new BadRequestException('Email is not proper');
  }
  // check if name min 5 char
  if (name.length < 5) {
    throw new BadRequestException('Name minimum length is 5');
  }
  // check if name max 25 char
  if (name.length > 25) {
    throw new BadRequestException('Name maximum length is 25');
  }
  // check if password strongenough (min 5, contains number, contain lowercase, contain uppercase)
  if (!password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{5,})$/)) {
    throw new BadRequestException('Password not strong enough');
  }
};

export const validateAdminUpdateInput = ({
  id,
  email,
  name,
  password,
}: UpdateAdminInput) => {
  // id not empty and is int
  validateId(id);
  validateRegisterInput({ email, name, password });
};

export const validateLoginInput = ({ email, password }: LoginAdminInput) => {
  // all Cannot be empty
  if (validator.isEmpty(email) || validator.isEmpty(password)) {
    throw new BadRequestException('Input must not be empty');
  }
};

export const validateCreateToolInput = ({
  name,
  image,
  activated,
  totalStock,
  priceHour,
  priceDay,
}: CreateToolInput) => {
  // all not empty
  if (
    validator.isEmpty(name) ||
    validator.isEmpty(image) ||
    validator.isEmpty(activated.toString()) ||
    validator.isEmpty(totalStock.toString()) ||
    validator.isEmpty(priceHour.toString()) ||
    validator.isEmpty(priceHour.toString())
  ) {
    throw new BadRequestException('Input must not be empty');
  }
  // Name length minimum 4, max 30
  if (name.length < 4) {
    throw new BadRequestException('Name minimum length is 4');
  }
  if (name.length > 30) {
    throw new BadRequestException('Name maximum length is 25');
  }
  // image includes /uploads/
  if (!image.includes('/uploads/')) {
    throw new BadRequestException('image path not valid');
  }
  // totalStock is integer
  if (!validator.isInt(totalStock.toString()) || totalStock < 0) {
    throw new BadRequestException('totalStock must be positive integer');
  }
  // priceHour is integer
  if (!validator.isInt(priceHour.toString()) || priceHour < 0) {
    throw new BadRequestException('priceHour must be positive integer');
  }
  // priceDay is integer
  if (!validator.isInt(priceDay.toString()) || priceDay < 0) {
    throw new BadRequestException('priceDay must be positive integer');
  }
};

export const validateUpdateToolInput = ({
  id,
  name,
  image,
  activated,
  totalStock,
  priceHour,
  priceDay,
}: UpdateToolInput) => {
  // id not empty and is int
  validateId(id);
  // use the same validation as createtool
  validateCreateToolInput({
    name,
    image,
    activated,
    totalStock,
    priceHour,
    priceDay,
  });
};

export const validateCreateRentInput = ({
  tools,
  rentName,
  rentNim,
  rentPhone,
  rentLineId,
  organisation,
  fromDate,
  expectedReturnDate,
  status,
  totalPrice,
}: CreateRentInput) => {
  // check all not empty
  if (
    validator.isEmpty(tools) ||
    validator.isEmpty(rentName) ||
    validator.isEmpty(rentNim) ||
    validator.isEmpty(rentPhone) ||
    validator.isEmpty(rentLineId) ||
    validator.isEmpty(organisation) ||
    validator.isEmpty(fromDate.toISOString()) ||
    validator.isEmpty(expectedReturnDate.toISOString()) ||
    validator.isEmpty(status) ||
    validator.isEmpty(totalPrice.toString())
  ) {
    throw new BadRequestException('Input must not be empty');
  }
  // parse tools to json, check if proper json
  if (!validator.isJSON(tools)) {
    throw new BadRequestException('tools must be proper json');
  }
  // rentName min 4 max 25
  if (rentName.length < 4 || rentName.length > 25) {
    throw new BadRequestException(
      'rentName minimum length is 4 and maximum length is 25',
    );
  }
  // rentNim is integer
  if (!validator.isInt(rentNim.toString()) || Number(rentNim) < 0) {
    throw new BadRequestException('rentNim must be a positive integer');
  }
  // phone is phone number
  if (!validator.isMobilePhone(rentPhone)) {
    throw new BadRequestException('Phone must be a proper phone number');
  }
  // fromDate is date
  if (!(fromDate instanceof Date)) {
    throw new BadRequestException('fromDate must be a proper date');
  }
  // expectedReturnDate is date
  if (!(expectedReturnDate instanceof Date)) {
    throw new BadRequestException('expectedReturnDate must be a proper date');
  }
  // status is in listofstatus
  if (!listOfStatus.includes(status)) {
    throw new BadRequestException('status is not known');
  }
  // totalPrice is int
  if (!validator.isInt(totalPrice.toString()) || totalPrice < 0) {
    throw new BadRequestException('totalPrice must be a positive integer');
  }
};

export const validateUpdateRentInput = ({
  id,
  rentName,
  rentNim,
  rentPhone,
  rentLineId,
  organisation,
  fromDate,
  expectedReturnDate,
  status,
  totalPrice,
  fine,
  pickupName,
  pickupNim,
  returnName,
  returnNim,
  returnDate,
}: UpdateRentInput) => {
  // id not empty and is int
  validateId(id);
  // use the same validation as createRent
  const tools = '{}';
  validateCreateRentInput({
    tools,
    rentName,
    rentNim,
    rentPhone,
    rentLineId,
    organisation,
    fromDate,
    expectedReturnDate,
    status,
    totalPrice,
  });
  // fine is int
  if (!validator.isInt(fine.toString()) || fine < 0) {
    throw new BadRequestException('fine must be a positive integer');
  }
  // pickupName min 4 max 25
  if (pickupName.length < 4 || pickupName.length > 25) {
    throw new BadRequestException(
      'pickupName minimum length is 4 and maximum length is 25',
    );
  }
  // pickupNim is int
  if (!validator.isInt(pickupNim) || Number(pickupNim) < 0) {
    throw new BadRequestException('pickupNim must be a positive integer');
  }
  // returnName min 4 max 25
  if (returnName.length < 4 || returnName.length > 25) {
    throw new BadRequestException(
      'returnName minimum length is 4 and maximum length is 25',
    );
  }
  // returnNim is int
  if (!validator.isInt(returnNim.toString()) || Number(returnNim) < 0) {
    throw new BadRequestException('returnNim must be a positive integer');
  }
  // returnDate is date
  if (!(returnDate instanceof Date)) {
    throw new BadRequestException('returnDate must be a proper date');
  }
};

export const validateCreateShopInput = ({
  title,
  imageUrl,
  link,
  price,
}: CreateShopInput) => {
  // check all not empty
  if (
    validator.isEmpty(title) ||
    validator.isEmpty(imageUrl) ||
    validator.isEmpty(link) ||
    validator.isEmpty(price.toString())
  ) {
    throw new BadRequestException('Input must not be empty');
  }
  // title min 5 max 50
  if (title.length < 5 || title.length > 50) {
    throw new BadRequestException(
      'title minimum length is 5 and maximum length is 50',
    );
  }
  // imageUrl is properUrl
  if (!validator.isURL(imageUrl)) {
    throw new BadRequestException('imageUrl is not a valid url');
  }
  // link is properUrl
  if (!validator.isURL(link)) {
    throw new BadRequestException('link is not a valid url');
  }
  // price is int
  if (!validator.isInt(price.toString()) || price < 0) {
    throw new BadRequestException('price must be a positive integer');
  }
};

export const validateUpdateShopInput = ({
  id,
  title,
  imageUrl,
  link,
  price,
}: UpdateShopInput) => {
  // id not empty and is int
  validateId(id);
  // use the same validation as createShop
  validateCreateShopInput({ title, imageUrl, link, price });
};

export const validateCreateArticleInput = ({
  title,
  desc,
  imageUrl,
  publishedDate,
  duration,
  link,
}: CreateArticleInput) => {
  // check all not empty
  if (
    validator.isEmpty(title) ||
    validator.isEmpty(desc) ||
    validator.isEmpty(imageUrl) ||
    validator.isEmpty(publishedDate.toISOString()) ||
    validator.isEmpty(link) ||
    validator.isEmpty(duration.toString())
  ) {
    throw new BadRequestException('Input must not be empty');
  }
  // title min 5 max 50
  if (title.length < 5 || title.length > 50) {
    throw new BadRequestException(
      'title minimum length is 5 and maximum length is 50',
    );
  }
  // desc min 5 max 250
  if (desc.length < 5 || desc.length > 250) {
    throw new BadRequestException(
      'desc minimum length is 5 and maximum length is 250',
    );
  }
  // imageUrl is properUrl
  if (!validator.isURL(imageUrl)) {
    throw new BadRequestException('imageUrl is not a valid url');
  }
  // publishedDate is date
  if (!(publishedDate instanceof Date)) {
    throw new BadRequestException('publishedDate must be a proper date');
  }
  // duration is int
  if (!validator.isInt(duration.toString()) || duration < 0) {
    throw new BadRequestException('duration must be a positive integer');
  }
  // link is properUrl
  if (!validator.isURL(link)) {
    throw new BadRequestException('link is not a valid url');
  }
};

export const validateUpdateArticleInput = ({
  id,
  title,
  desc,
  imageUrl,
  publishedDate,
  duration,
  link,
}: UpdateArticleInput) => {
  // id not empty and is int
  validateId(id);
  // use the same validation as createShop
  validateCreateArticleInput({
    title,
    desc,
    imageUrl,
    publishedDate,
    duration,
    link,
  });
};

const validateId = (id: number) => {
  // id not empty and is int
  if (validator.isEmpty(id.toString())) {
    throw new BadRequestException('ID must not be empty');
  }
  if (!validator.isInt(id.toString())) {
    throw new BadRequestException('ID must be a positive integer');
  }
};

const listOfStatus = [
  'waiting_pickup',
  'waiting_return',
  'finished',
  'dropped',
];
