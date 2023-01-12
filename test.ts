

type StringFromType<T = any> = T extends string ? string: T extends boolean ? boolean: Error;
type lorem = StringFromType<'lorem ipsum'> // 'string'
type isActive = StringFromType<false> // 'boolean'
type unassignable = StringFromType<TypeError> // 'error'



