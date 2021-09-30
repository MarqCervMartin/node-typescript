enum UserDomain {
	HOME_OFFICE = 'HOMEOFFICE',
	STORE = 'STORE',
	NOT_FOUND = 'NOT_FOUND',
}
// A common type to detect the enum type

type EnumType = typeof UserDomain;
type EnumKeyType = keyof EnumType;

const domain = 'Store/Club-Pharmacy & Optical';

//Old example
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
//New example
const newParseUserDomain = (userDomain: string): UserDomain => {
	const domaIn = userDomain.toUpperCase();
  const keys = Object.values(UserDomain).filter((el: string) => domaIn.includes(el))
  let val = keys.map((ele) => ele === UserDomain.NOT_FOUND ? UserDomain.HOME_OFFICE : ele)
  if(val.length > 0){
    return val[0];
  }else{
    return UserDomain.HOME_OFFICE;
  }
};

let par = newParseUserDomain(domain);
console.log('Include ', par)
//inverse type --- ignored
let value = Object.values(UserDomain).includes(domain.toUpperCase() as UserDomain)
console.log(value);