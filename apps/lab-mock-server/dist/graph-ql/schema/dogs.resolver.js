var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Query, Resolver } from 'type-graphql';
import { Dog, Hello } from '@src/graph-ql/schema/dogs';
import dogs from '@src/mock-data/dogs.json';
let DogsResolver = class DogsResolver {
    dogs() {
        return dogs;
    }
    hellos() {
        return [{ name: 'hello' }, { name: 'hi' }];
    }
};
__decorate([
    Query(() => [Dog]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], DogsResolver.prototype, "dogs", null);
__decorate([
    Query(() => [Hello]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], DogsResolver.prototype, "hellos", null);
DogsResolver = __decorate([
    Resolver()
], DogsResolver);
export { DogsResolver };
//# sourceMappingURL=dogs.resolver.js.map