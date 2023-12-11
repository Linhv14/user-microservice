export class CraeteProfileDTO {
    ID?: number
    name: string
    phoneNumber: string
    age?: number
    avatar?: string
    defaultAddress: string
}

export class OptionsDTO {
    take?: number
    skip?: number
    orderBy?: {}
}