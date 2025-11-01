enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

const getRoleName = (role: Role) => {
  return `Your role is: ${role}`;
}

console.log(getRoleName(Role.Admin)); // "Your role is: ADMIN"
