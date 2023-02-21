var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ObjectType, Field, ID } from 'type-graphql';
let DogAttribute = class DogAttribute {
};
__decorate([
    Field(() => ID),
    __metadata("design:type", String)
], DogAttribute.prototype, "key", void 0);
__decorate([
    Field(() => String),
    __metadata("design:type", String)
], DogAttribute.prototype, "value", void 0);
DogAttribute = __decorate([
    ObjectType()
], DogAttribute);
export { DogAttribute };
let Dog = class Dog {
};
__decorate([
    Field(() => ID),
    __metadata("design:type", String)
], Dog.prototype, "name", void 0);
__decorate([
    Field(() => [DogAttribute]),
    __metadata("design:type", Array)
], Dog.prototype, "attributes", void 0);
__decorate([
    Field(() => [String]),
    __metadata("design:type", Array)
], Dog.prototype, "description", void 0);
__decorate([
    Field(() => String),
    __metadata("design:type", String)
], Dog.prototype, "image", void 0);
__decorate([
    Field(() => Number),
    __metadata("design:type", Number)
], Dog.prototype, "ageInWeeks", void 0);
__decorate([
    Field(() => String),
    __metadata("design:type", String)
], Dog.prototype, "sex", void 0);
__decorate([
    Field(() => String),
    __metadata("design:type", String)
], Dog.prototype, "breed", void 0);
__decorate([
    Field(() => String),
    __metadata("design:type", String)
], Dog.prototype, "color", void 0);
__decorate([
    Field(() => Number),
    __metadata("design:type", Number)
], Dog.prototype, "fee", void 0);
__decorate([
    Field(() => String),
    __metadata("design:type", String)
], Dog.prototype, "availableDate", void 0);
__decorate([
    Field(() => Number),
    __metadata("design:type", Number)
], Dog.prototype, "weight", void 0);
Dog = __decorate([
    ObjectType()
], Dog);
export { Dog };
let Hello = class Hello {
};
__decorate([
    Field(() => String),
    __metadata("design:type", String)
], Hello.prototype, "name", void 0);
Hello = __decorate([
    ObjectType()
], Hello);
export { Hello };
//# sourceMappingURL=dogs.js.map