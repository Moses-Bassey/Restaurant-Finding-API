// import Role from '../role.enum';
import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import { raceWith } from 'rxjs';
import { JwtAuthGuard } from './jwt.auth.guards';

const RoleGuard = (allowedRoles): Type<CanActivate> => {
  class RoleGuardMixin extends JwtAuthGuard {
    async canActivate(context: ExecutionContext) {
      await super.canActivate(context);

      const request = context.switchToHttp().getRequest();
      const user = request.user;

      allowedRoles = Array.isArray(allowedRoles)
        ? allowedRoles
        : [allowedRoles];

      return allowedRoles
        .map((allowedRole) => allowedRole.toUpperCase())
        .includes(user?.userType.toUpperCase());
    }
  }

  return mixin(RoleGuardMixin);
};

export default RoleGuard;
