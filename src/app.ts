enum UserDomain {
	HOME_OFFICE = 'HOMEOFFICE',
	STORE = 'STORE',
	NOT_FOUND = 'NOT_FOUND',
}
// A common type to detect the enum type

type EnumType = typeof UserDomain;
type EnumKeyType = keyof EnumType;

const domain = 'NOT_FOUND';

const parseUserDomain = (userDomain: string): UserDomain => {
	const domain = userDomain.toUpperCase();

	if (domain.includes(UserDomain.STORE)) {
		return UserDomain.STORE;
	} else if (domain.includes(UserDomain.HOME_OFFICE)) {
		return UserDomain.HOME_OFFICE;
	} else {
		return UserDomain.NOT_FOUND;
	}
};
/*
const parseUserDomainxD = (userDomain: string): UserDomain => {
	const domain = userDomain.toUpperCase();
  let enumValue:UserDomain;
  for (let element in UserDomain) {
    //console.log('Element ', UserDomain[element as EnumKeyType])
    if (domain.includes(UserDomain[element as EnumKeyType])){
      enumValue = UserDomain[element as EnumKeyType];
      return enumValue
    } else {
      enumValue = UserDomain.HOME_OFFICE;
      return enumValue
    }
  }
};
*/

const parseUserDomainxD = (userDomain: string): UserDomain => {
	const domain = userDomain.toUpperCase();
  let enumValue:UserDomain;
  for (let element in UserDomain) {
    //console.log('Element ', UserDomain[element as EnumKeyType])
    if (domain.includes(UserDomain[element as EnumKeyType])){
      enumValue = UserDomain[element as EnumKeyType];
      return enumValue
    } else {
      enumValue = UserDomain.HOME_OFFICE;
      return enumValue
    }
  }
};

//let valueParse = parseUserDomain(xd);
//console.log('ParseDomain ', valueParse);
let domainfor = parseUserDomainxD(domain);
console.log('Domain For ',domainfor);

//inverse type
let value = Object.values(UserDomain).includes(domain.toUpperCase() as UserDomain)
console.log(value);