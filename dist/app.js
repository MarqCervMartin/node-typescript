var UserDomain;
(function (UserDomain) {
    UserDomain["HOME_OFFICE"] = "HOMEOFFICE";
    UserDomain["STORE"] = "STORE";
    UserDomain["NOT_FOUND"] = "NOT_FOUND";
})(UserDomain || (UserDomain = {}));
const domain = 'NOT_FOUND';
const parseUserDomain = (userDomain) => {
    const domain = userDomain.toUpperCase();
    if (domain.includes(UserDomain.STORE)) {
        return UserDomain.STORE;
    }
    else if (domain.includes(UserDomain.HOME_OFFICE)) {
        return UserDomain.HOME_OFFICE;
    }
    else {
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
const parseUserDomainxD = (userDomain) => {
    const domain = userDomain.toUpperCase();
    let enumValue;
    for (let element in UserDomain) {
        //console.log('Element ', UserDomain[element as EnumKeyType])
        if (domain.includes(UserDomain[element])) {
            enumValue = UserDomain[element];
            return enumValue;
        }
        else {
            enumValue = UserDomain.HOME_OFFICE;
            return enumValue;
        }
    }
};
//let valueParse = parseUserDomain(xd);
//console.log('ParseDomain ', valueParse);
let domainfor = parseUserDomainxD(domain);
console.log('Domain For ', domainfor);
//inverse type
let value = Object.values(UserDomain).includes(domain.toUpperCase());
console.log(value);
//# sourceMappingURL=app.js.map