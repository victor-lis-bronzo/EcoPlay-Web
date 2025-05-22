
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BottleCap
 * 
 */
export type BottleCap = $Result.DefaultSelection<Prisma.$BottleCapPayload>
/**
 * Model Controller
 * 
 */
export type Controller = $Result.DefaultSelection<Prisma.$ControllerPayload>
/**
 * Model Institution
 * 
 */
export type Institution = $Result.DefaultSelection<Prisma.$InstitutionPayload>
/**
 * Model Operator
 * 
 */
export type Operator = $Result.DefaultSelection<Prisma.$OperatorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserType = (typeof UserType)[keyof typeof UserType]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BottleCaps
 * const bottleCaps = await prisma.bottleCap.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BottleCaps
   * const bottleCaps = await prisma.bottleCap.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bottleCap`: Exposes CRUD operations for the **BottleCap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BottleCaps
    * const bottleCaps = await prisma.bottleCap.findMany()
    * ```
    */
  get bottleCap(): Prisma.BottleCapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.controller`: Exposes CRUD operations for the **Controller** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Controllers
    * const controllers = await prisma.controller.findMany()
    * ```
    */
  get controller(): Prisma.ControllerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.institution`: Exposes CRUD operations for the **Institution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Institutions
    * const institutions = await prisma.institution.findMany()
    * ```
    */
  get institution(): Prisma.InstitutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operator`: Exposes CRUD operations for the **Operator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operators
    * const operators = await prisma.operator.findMany()
    * ```
    */
  get operator(): Prisma.OperatorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BottleCap: 'BottleCap',
    Controller: 'Controller',
    Institution: 'Institution',
    Operator: 'Operator'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bottleCap" | "controller" | "institution" | "operator"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BottleCap: {
        payload: Prisma.$BottleCapPayload<ExtArgs>
        fields: Prisma.BottleCapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BottleCapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottleCapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BottleCapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottleCapPayload>
          }
          findFirst: {
            args: Prisma.BottleCapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottleCapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BottleCapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottleCapPayload>
          }
          findMany: {
            args: Prisma.BottleCapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottleCapPayload>[]
          }
          create: {
            args: Prisma.BottleCapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottleCapPayload>
          }
          createMany: {
            args: Prisma.BottleCapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BottleCapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottleCapPayload>[]
          }
          delete: {
            args: Prisma.BottleCapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottleCapPayload>
          }
          update: {
            args: Prisma.BottleCapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottleCapPayload>
          }
          deleteMany: {
            args: Prisma.BottleCapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BottleCapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BottleCapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottleCapPayload>[]
          }
          upsert: {
            args: Prisma.BottleCapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottleCapPayload>
          }
          aggregate: {
            args: Prisma.BottleCapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBottleCap>
          }
          groupBy: {
            args: Prisma.BottleCapGroupByArgs<ExtArgs>
            result: $Utils.Optional<BottleCapGroupByOutputType>[]
          }
          count: {
            args: Prisma.BottleCapCountArgs<ExtArgs>
            result: $Utils.Optional<BottleCapCountAggregateOutputType> | number
          }
        }
      }
      Controller: {
        payload: Prisma.$ControllerPayload<ExtArgs>
        fields: Prisma.ControllerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ControllerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ControllerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload>
          }
          findFirst: {
            args: Prisma.ControllerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ControllerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload>
          }
          findMany: {
            args: Prisma.ControllerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload>[]
          }
          create: {
            args: Prisma.ControllerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload>
          }
          createMany: {
            args: Prisma.ControllerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ControllerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload>[]
          }
          delete: {
            args: Prisma.ControllerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload>
          }
          update: {
            args: Prisma.ControllerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload>
          }
          deleteMany: {
            args: Prisma.ControllerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ControllerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ControllerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload>[]
          }
          upsert: {
            args: Prisma.ControllerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload>
          }
          aggregate: {
            args: Prisma.ControllerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateController>
          }
          groupBy: {
            args: Prisma.ControllerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ControllerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ControllerCountArgs<ExtArgs>
            result: $Utils.Optional<ControllerCountAggregateOutputType> | number
          }
        }
      }
      Institution: {
        payload: Prisma.$InstitutionPayload<ExtArgs>
        fields: Prisma.InstitutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstitutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstitutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          findFirst: {
            args: Prisma.InstitutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstitutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          findMany: {
            args: Prisma.InstitutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          create: {
            args: Prisma.InstitutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          createMany: {
            args: Prisma.InstitutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstitutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          delete: {
            args: Prisma.InstitutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          update: {
            args: Prisma.InstitutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          deleteMany: {
            args: Prisma.InstitutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstitutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstitutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          upsert: {
            args: Prisma.InstitutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          aggregate: {
            args: Prisma.InstitutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstitution>
          }
          groupBy: {
            args: Prisma.InstitutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstitutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstitutionCountArgs<ExtArgs>
            result: $Utils.Optional<InstitutionCountAggregateOutputType> | number
          }
        }
      }
      Operator: {
        payload: Prisma.$OperatorPayload<ExtArgs>
        fields: Prisma.OperatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          findFirst: {
            args: Prisma.OperatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          findMany: {
            args: Prisma.OperatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>[]
          }
          create: {
            args: Prisma.OperatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          createMany: {
            args: Prisma.OperatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>[]
          }
          delete: {
            args: Prisma.OperatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          update: {
            args: Prisma.OperatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          deleteMany: {
            args: Prisma.OperatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OperatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>[]
          }
          upsert: {
            args: Prisma.OperatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          aggregate: {
            args: Prisma.OperatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperator>
          }
          groupBy: {
            args: Prisma.OperatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperatorCountArgs<ExtArgs>
            result: $Utils.Optional<OperatorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    bottleCap?: BottleCapOmit
    controller?: ControllerOmit
    institution?: InstitutionOmit
    operator?: OperatorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ControllerCountOutputType
   */

  export type ControllerCountOutputType = {
    bottles_cap: number
  }

  export type ControllerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bottles_cap?: boolean | ControllerCountOutputTypeCountBottles_capArgs
  }

  // Custom InputTypes
  /**
   * ControllerCountOutputType without action
   */
  export type ControllerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControllerCountOutputType
     */
    select?: ControllerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ControllerCountOutputType without action
   */
  export type ControllerCountOutputTypeCountBottles_capArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BottleCapWhereInput
  }


  /**
   * Count Type InstitutionCountOutputType
   */

  export type InstitutionCountOutputType = {
    controllers: number
    operators: number
  }

  export type InstitutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    controllers?: boolean | InstitutionCountOutputTypeCountControllersArgs
    operators?: boolean | InstitutionCountOutputTypeCountOperatorsArgs
  }

  // Custom InputTypes
  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionCountOutputType
     */
    select?: InstitutionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountControllersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ControllerWhereInput
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountOperatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperatorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BottleCap
   */

  export type AggregateBottleCap = {
    _count: BottleCapCountAggregateOutputType | null
    _avg: BottleCapAvgAggregateOutputType | null
    _sum: BottleCapSumAggregateOutputType | null
    _min: BottleCapMinAggregateOutputType | null
    _max: BottleCapMaxAggregateOutputType | null
  }

  export type BottleCapAvgAggregateOutputType = {
    bottleCapId: number | null
  }

  export type BottleCapSumAggregateOutputType = {
    bottleCapId: number | null
  }

  export type BottleCapMinAggregateOutputType = {
    bottleCapId: number | null
    createdAt: Date | null
    controllerCode: string | null
  }

  export type BottleCapMaxAggregateOutputType = {
    bottleCapId: number | null
    createdAt: Date | null
    controllerCode: string | null
  }

  export type BottleCapCountAggregateOutputType = {
    bottleCapId: number
    createdAt: number
    controllerCode: number
    _all: number
  }


  export type BottleCapAvgAggregateInputType = {
    bottleCapId?: true
  }

  export type BottleCapSumAggregateInputType = {
    bottleCapId?: true
  }

  export type BottleCapMinAggregateInputType = {
    bottleCapId?: true
    createdAt?: true
    controllerCode?: true
  }

  export type BottleCapMaxAggregateInputType = {
    bottleCapId?: true
    createdAt?: true
    controllerCode?: true
  }

  export type BottleCapCountAggregateInputType = {
    bottleCapId?: true
    createdAt?: true
    controllerCode?: true
    _all?: true
  }

  export type BottleCapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BottleCap to aggregate.
     */
    where?: BottleCapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BottleCaps to fetch.
     */
    orderBy?: BottleCapOrderByWithRelationInput | BottleCapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BottleCapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BottleCaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BottleCaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BottleCaps
    **/
    _count?: true | BottleCapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BottleCapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BottleCapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BottleCapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BottleCapMaxAggregateInputType
  }

  export type GetBottleCapAggregateType<T extends BottleCapAggregateArgs> = {
        [P in keyof T & keyof AggregateBottleCap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBottleCap[P]>
      : GetScalarType<T[P], AggregateBottleCap[P]>
  }




  export type BottleCapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BottleCapWhereInput
    orderBy?: BottleCapOrderByWithAggregationInput | BottleCapOrderByWithAggregationInput[]
    by: BottleCapScalarFieldEnum[] | BottleCapScalarFieldEnum
    having?: BottleCapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BottleCapCountAggregateInputType | true
    _avg?: BottleCapAvgAggregateInputType
    _sum?: BottleCapSumAggregateInputType
    _min?: BottleCapMinAggregateInputType
    _max?: BottleCapMaxAggregateInputType
  }

  export type BottleCapGroupByOutputType = {
    bottleCapId: number
    createdAt: Date
    controllerCode: string
    _count: BottleCapCountAggregateOutputType | null
    _avg: BottleCapAvgAggregateOutputType | null
    _sum: BottleCapSumAggregateOutputType | null
    _min: BottleCapMinAggregateOutputType | null
    _max: BottleCapMaxAggregateOutputType | null
  }

  type GetBottleCapGroupByPayload<T extends BottleCapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BottleCapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BottleCapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BottleCapGroupByOutputType[P]>
            : GetScalarType<T[P], BottleCapGroupByOutputType[P]>
        }
      >
    >


  export type BottleCapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bottleCapId?: boolean
    createdAt?: boolean
    controllerCode?: boolean
    controller?: boolean | ControllerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bottleCap"]>

  export type BottleCapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bottleCapId?: boolean
    createdAt?: boolean
    controllerCode?: boolean
    controller?: boolean | ControllerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bottleCap"]>

  export type BottleCapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bottleCapId?: boolean
    createdAt?: boolean
    controllerCode?: boolean
    controller?: boolean | ControllerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bottleCap"]>

  export type BottleCapSelectScalar = {
    bottleCapId?: boolean
    createdAt?: boolean
    controllerCode?: boolean
  }

  export type BottleCapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bottleCapId" | "createdAt" | "controllerCode", ExtArgs["result"]["bottleCap"]>
  export type BottleCapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    controller?: boolean | ControllerDefaultArgs<ExtArgs>
  }
  export type BottleCapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    controller?: boolean | ControllerDefaultArgs<ExtArgs>
  }
  export type BottleCapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    controller?: boolean | ControllerDefaultArgs<ExtArgs>
  }

  export type $BottleCapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BottleCap"
    objects: {
      controller: Prisma.$ControllerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      bottleCapId: number
      createdAt: Date
      controllerCode: string
    }, ExtArgs["result"]["bottleCap"]>
    composites: {}
  }

  type BottleCapGetPayload<S extends boolean | null | undefined | BottleCapDefaultArgs> = $Result.GetResult<Prisma.$BottleCapPayload, S>

  type BottleCapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BottleCapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BottleCapCountAggregateInputType | true
    }

  export interface BottleCapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BottleCap'], meta: { name: 'BottleCap' } }
    /**
     * Find zero or one BottleCap that matches the filter.
     * @param {BottleCapFindUniqueArgs} args - Arguments to find a BottleCap
     * @example
     * // Get one BottleCap
     * const bottleCap = await prisma.bottleCap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BottleCapFindUniqueArgs>(args: SelectSubset<T, BottleCapFindUniqueArgs<ExtArgs>>): Prisma__BottleCapClient<$Result.GetResult<Prisma.$BottleCapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BottleCap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BottleCapFindUniqueOrThrowArgs} args - Arguments to find a BottleCap
     * @example
     * // Get one BottleCap
     * const bottleCap = await prisma.bottleCap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BottleCapFindUniqueOrThrowArgs>(args: SelectSubset<T, BottleCapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BottleCapClient<$Result.GetResult<Prisma.$BottleCapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BottleCap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BottleCapFindFirstArgs} args - Arguments to find a BottleCap
     * @example
     * // Get one BottleCap
     * const bottleCap = await prisma.bottleCap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BottleCapFindFirstArgs>(args?: SelectSubset<T, BottleCapFindFirstArgs<ExtArgs>>): Prisma__BottleCapClient<$Result.GetResult<Prisma.$BottleCapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BottleCap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BottleCapFindFirstOrThrowArgs} args - Arguments to find a BottleCap
     * @example
     * // Get one BottleCap
     * const bottleCap = await prisma.bottleCap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BottleCapFindFirstOrThrowArgs>(args?: SelectSubset<T, BottleCapFindFirstOrThrowArgs<ExtArgs>>): Prisma__BottleCapClient<$Result.GetResult<Prisma.$BottleCapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BottleCaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BottleCapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BottleCaps
     * const bottleCaps = await prisma.bottleCap.findMany()
     * 
     * // Get first 10 BottleCaps
     * const bottleCaps = await prisma.bottleCap.findMany({ take: 10 })
     * 
     * // Only select the `bottleCapId`
     * const bottleCapWithBottleCapIdOnly = await prisma.bottleCap.findMany({ select: { bottleCapId: true } })
     * 
     */
    findMany<T extends BottleCapFindManyArgs>(args?: SelectSubset<T, BottleCapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BottleCapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BottleCap.
     * @param {BottleCapCreateArgs} args - Arguments to create a BottleCap.
     * @example
     * // Create one BottleCap
     * const BottleCap = await prisma.bottleCap.create({
     *   data: {
     *     // ... data to create a BottleCap
     *   }
     * })
     * 
     */
    create<T extends BottleCapCreateArgs>(args: SelectSubset<T, BottleCapCreateArgs<ExtArgs>>): Prisma__BottleCapClient<$Result.GetResult<Prisma.$BottleCapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BottleCaps.
     * @param {BottleCapCreateManyArgs} args - Arguments to create many BottleCaps.
     * @example
     * // Create many BottleCaps
     * const bottleCap = await prisma.bottleCap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BottleCapCreateManyArgs>(args?: SelectSubset<T, BottleCapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BottleCaps and returns the data saved in the database.
     * @param {BottleCapCreateManyAndReturnArgs} args - Arguments to create many BottleCaps.
     * @example
     * // Create many BottleCaps
     * const bottleCap = await prisma.bottleCap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BottleCaps and only return the `bottleCapId`
     * const bottleCapWithBottleCapIdOnly = await prisma.bottleCap.createManyAndReturn({
     *   select: { bottleCapId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BottleCapCreateManyAndReturnArgs>(args?: SelectSubset<T, BottleCapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BottleCapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BottleCap.
     * @param {BottleCapDeleteArgs} args - Arguments to delete one BottleCap.
     * @example
     * // Delete one BottleCap
     * const BottleCap = await prisma.bottleCap.delete({
     *   where: {
     *     // ... filter to delete one BottleCap
     *   }
     * })
     * 
     */
    delete<T extends BottleCapDeleteArgs>(args: SelectSubset<T, BottleCapDeleteArgs<ExtArgs>>): Prisma__BottleCapClient<$Result.GetResult<Prisma.$BottleCapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BottleCap.
     * @param {BottleCapUpdateArgs} args - Arguments to update one BottleCap.
     * @example
     * // Update one BottleCap
     * const bottleCap = await prisma.bottleCap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BottleCapUpdateArgs>(args: SelectSubset<T, BottleCapUpdateArgs<ExtArgs>>): Prisma__BottleCapClient<$Result.GetResult<Prisma.$BottleCapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BottleCaps.
     * @param {BottleCapDeleteManyArgs} args - Arguments to filter BottleCaps to delete.
     * @example
     * // Delete a few BottleCaps
     * const { count } = await prisma.bottleCap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BottleCapDeleteManyArgs>(args?: SelectSubset<T, BottleCapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BottleCaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BottleCapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BottleCaps
     * const bottleCap = await prisma.bottleCap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BottleCapUpdateManyArgs>(args: SelectSubset<T, BottleCapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BottleCaps and returns the data updated in the database.
     * @param {BottleCapUpdateManyAndReturnArgs} args - Arguments to update many BottleCaps.
     * @example
     * // Update many BottleCaps
     * const bottleCap = await prisma.bottleCap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BottleCaps and only return the `bottleCapId`
     * const bottleCapWithBottleCapIdOnly = await prisma.bottleCap.updateManyAndReturn({
     *   select: { bottleCapId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BottleCapUpdateManyAndReturnArgs>(args: SelectSubset<T, BottleCapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BottleCapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BottleCap.
     * @param {BottleCapUpsertArgs} args - Arguments to update or create a BottleCap.
     * @example
     * // Update or create a BottleCap
     * const bottleCap = await prisma.bottleCap.upsert({
     *   create: {
     *     // ... data to create a BottleCap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BottleCap we want to update
     *   }
     * })
     */
    upsert<T extends BottleCapUpsertArgs>(args: SelectSubset<T, BottleCapUpsertArgs<ExtArgs>>): Prisma__BottleCapClient<$Result.GetResult<Prisma.$BottleCapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BottleCaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BottleCapCountArgs} args - Arguments to filter BottleCaps to count.
     * @example
     * // Count the number of BottleCaps
     * const count = await prisma.bottleCap.count({
     *   where: {
     *     // ... the filter for the BottleCaps we want to count
     *   }
     * })
    **/
    count<T extends BottleCapCountArgs>(
      args?: Subset<T, BottleCapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BottleCapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BottleCap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BottleCapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BottleCapAggregateArgs>(args: Subset<T, BottleCapAggregateArgs>): Prisma.PrismaPromise<GetBottleCapAggregateType<T>>

    /**
     * Group by BottleCap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BottleCapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BottleCapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BottleCapGroupByArgs['orderBy'] }
        : { orderBy?: BottleCapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BottleCapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBottleCapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BottleCap model
   */
  readonly fields: BottleCapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BottleCap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BottleCapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    controller<T extends ControllerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ControllerDefaultArgs<ExtArgs>>): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BottleCap model
   */
  interface BottleCapFieldRefs {
    readonly bottleCapId: FieldRef<"BottleCap", 'Int'>
    readonly createdAt: FieldRef<"BottleCap", 'DateTime'>
    readonly controllerCode: FieldRef<"BottleCap", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BottleCap findUnique
   */
  export type BottleCapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottleCap
     */
    select?: BottleCapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottleCap
     */
    omit?: BottleCapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BottleCapInclude<ExtArgs> | null
    /**
     * Filter, which BottleCap to fetch.
     */
    where: BottleCapWhereUniqueInput
  }

  /**
   * BottleCap findUniqueOrThrow
   */
  export type BottleCapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottleCap
     */
    select?: BottleCapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottleCap
     */
    omit?: BottleCapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BottleCapInclude<ExtArgs> | null
    /**
     * Filter, which BottleCap to fetch.
     */
    where: BottleCapWhereUniqueInput
  }

  /**
   * BottleCap findFirst
   */
  export type BottleCapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottleCap
     */
    select?: BottleCapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottleCap
     */
    omit?: BottleCapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BottleCapInclude<ExtArgs> | null
    /**
     * Filter, which BottleCap to fetch.
     */
    where?: BottleCapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BottleCaps to fetch.
     */
    orderBy?: BottleCapOrderByWithRelationInput | BottleCapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BottleCaps.
     */
    cursor?: BottleCapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BottleCaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BottleCaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BottleCaps.
     */
    distinct?: BottleCapScalarFieldEnum | BottleCapScalarFieldEnum[]
  }

  /**
   * BottleCap findFirstOrThrow
   */
  export type BottleCapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottleCap
     */
    select?: BottleCapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottleCap
     */
    omit?: BottleCapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BottleCapInclude<ExtArgs> | null
    /**
     * Filter, which BottleCap to fetch.
     */
    where?: BottleCapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BottleCaps to fetch.
     */
    orderBy?: BottleCapOrderByWithRelationInput | BottleCapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BottleCaps.
     */
    cursor?: BottleCapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BottleCaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BottleCaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BottleCaps.
     */
    distinct?: BottleCapScalarFieldEnum | BottleCapScalarFieldEnum[]
  }

  /**
   * BottleCap findMany
   */
  export type BottleCapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottleCap
     */
    select?: BottleCapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottleCap
     */
    omit?: BottleCapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BottleCapInclude<ExtArgs> | null
    /**
     * Filter, which BottleCaps to fetch.
     */
    where?: BottleCapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BottleCaps to fetch.
     */
    orderBy?: BottleCapOrderByWithRelationInput | BottleCapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BottleCaps.
     */
    cursor?: BottleCapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BottleCaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BottleCaps.
     */
    skip?: number
    distinct?: BottleCapScalarFieldEnum | BottleCapScalarFieldEnum[]
  }

  /**
   * BottleCap create
   */
  export type BottleCapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottleCap
     */
    select?: BottleCapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottleCap
     */
    omit?: BottleCapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BottleCapInclude<ExtArgs> | null
    /**
     * The data needed to create a BottleCap.
     */
    data: XOR<BottleCapCreateInput, BottleCapUncheckedCreateInput>
  }

  /**
   * BottleCap createMany
   */
  export type BottleCapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BottleCaps.
     */
    data: BottleCapCreateManyInput | BottleCapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BottleCap createManyAndReturn
   */
  export type BottleCapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottleCap
     */
    select?: BottleCapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BottleCap
     */
    omit?: BottleCapOmit<ExtArgs> | null
    /**
     * The data used to create many BottleCaps.
     */
    data: BottleCapCreateManyInput | BottleCapCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BottleCapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BottleCap update
   */
  export type BottleCapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottleCap
     */
    select?: BottleCapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottleCap
     */
    omit?: BottleCapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BottleCapInclude<ExtArgs> | null
    /**
     * The data needed to update a BottleCap.
     */
    data: XOR<BottleCapUpdateInput, BottleCapUncheckedUpdateInput>
    /**
     * Choose, which BottleCap to update.
     */
    where: BottleCapWhereUniqueInput
  }

  /**
   * BottleCap updateMany
   */
  export type BottleCapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BottleCaps.
     */
    data: XOR<BottleCapUpdateManyMutationInput, BottleCapUncheckedUpdateManyInput>
    /**
     * Filter which BottleCaps to update
     */
    where?: BottleCapWhereInput
    /**
     * Limit how many BottleCaps to update.
     */
    limit?: number
  }

  /**
   * BottleCap updateManyAndReturn
   */
  export type BottleCapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottleCap
     */
    select?: BottleCapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BottleCap
     */
    omit?: BottleCapOmit<ExtArgs> | null
    /**
     * The data used to update BottleCaps.
     */
    data: XOR<BottleCapUpdateManyMutationInput, BottleCapUncheckedUpdateManyInput>
    /**
     * Filter which BottleCaps to update
     */
    where?: BottleCapWhereInput
    /**
     * Limit how many BottleCaps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BottleCapIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BottleCap upsert
   */
  export type BottleCapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottleCap
     */
    select?: BottleCapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottleCap
     */
    omit?: BottleCapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BottleCapInclude<ExtArgs> | null
    /**
     * The filter to search for the BottleCap to update in case it exists.
     */
    where: BottleCapWhereUniqueInput
    /**
     * In case the BottleCap found by the `where` argument doesn't exist, create a new BottleCap with this data.
     */
    create: XOR<BottleCapCreateInput, BottleCapUncheckedCreateInput>
    /**
     * In case the BottleCap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BottleCapUpdateInput, BottleCapUncheckedUpdateInput>
  }

  /**
   * BottleCap delete
   */
  export type BottleCapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottleCap
     */
    select?: BottleCapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottleCap
     */
    omit?: BottleCapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BottleCapInclude<ExtArgs> | null
    /**
     * Filter which BottleCap to delete.
     */
    where: BottleCapWhereUniqueInput
  }

  /**
   * BottleCap deleteMany
   */
  export type BottleCapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BottleCaps to delete
     */
    where?: BottleCapWhereInput
    /**
     * Limit how many BottleCaps to delete.
     */
    limit?: number
  }

  /**
   * BottleCap without action
   */
  export type BottleCapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottleCap
     */
    select?: BottleCapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottleCap
     */
    omit?: BottleCapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BottleCapInclude<ExtArgs> | null
  }


  /**
   * Model Controller
   */

  export type AggregateController = {
    _count: ControllerCountAggregateOutputType | null
    _avg: ControllerAvgAggregateOutputType | null
    _sum: ControllerSumAggregateOutputType | null
    _min: ControllerMinAggregateOutputType | null
    _max: ControllerMaxAggregateOutputType | null
  }

  export type ControllerAvgAggregateOutputType = {
    controllerId: number | null
    institutionId: number | null
  }

  export type ControllerSumAggregateOutputType = {
    controllerId: number | null
    institutionId: number | null
  }

  export type ControllerMinAggregateOutputType = {
    code: string | null
    controllerId: number | null
    name: string | null
    status: boolean | null
    createdAt: Date | null
    institutionId: number | null
  }

  export type ControllerMaxAggregateOutputType = {
    code: string | null
    controllerId: number | null
    name: string | null
    status: boolean | null
    createdAt: Date | null
    institutionId: number | null
  }

  export type ControllerCountAggregateOutputType = {
    code: number
    controllerId: number
    name: number
    status: number
    createdAt: number
    institutionId: number
    _all: number
  }


  export type ControllerAvgAggregateInputType = {
    controllerId?: true
    institutionId?: true
  }

  export type ControllerSumAggregateInputType = {
    controllerId?: true
    institutionId?: true
  }

  export type ControllerMinAggregateInputType = {
    code?: true
    controllerId?: true
    name?: true
    status?: true
    createdAt?: true
    institutionId?: true
  }

  export type ControllerMaxAggregateInputType = {
    code?: true
    controllerId?: true
    name?: true
    status?: true
    createdAt?: true
    institutionId?: true
  }

  export type ControllerCountAggregateInputType = {
    code?: true
    controllerId?: true
    name?: true
    status?: true
    createdAt?: true
    institutionId?: true
    _all?: true
  }

  export type ControllerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Controller to aggregate.
     */
    where?: ControllerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controllers to fetch.
     */
    orderBy?: ControllerOrderByWithRelationInput | ControllerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ControllerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controllers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controllers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Controllers
    **/
    _count?: true | ControllerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ControllerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ControllerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ControllerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ControllerMaxAggregateInputType
  }

  export type GetControllerAggregateType<T extends ControllerAggregateArgs> = {
        [P in keyof T & keyof AggregateController]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateController[P]>
      : GetScalarType<T[P], AggregateController[P]>
  }




  export type ControllerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ControllerWhereInput
    orderBy?: ControllerOrderByWithAggregationInput | ControllerOrderByWithAggregationInput[]
    by: ControllerScalarFieldEnum[] | ControllerScalarFieldEnum
    having?: ControllerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ControllerCountAggregateInputType | true
    _avg?: ControllerAvgAggregateInputType
    _sum?: ControllerSumAggregateInputType
    _min?: ControllerMinAggregateInputType
    _max?: ControllerMaxAggregateInputType
  }

  export type ControllerGroupByOutputType = {
    code: string
    controllerId: number
    name: string
    status: boolean
    createdAt: Date
    institutionId: number
    _count: ControllerCountAggregateOutputType | null
    _avg: ControllerAvgAggregateOutputType | null
    _sum: ControllerSumAggregateOutputType | null
    _min: ControllerMinAggregateOutputType | null
    _max: ControllerMaxAggregateOutputType | null
  }

  type GetControllerGroupByPayload<T extends ControllerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ControllerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ControllerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ControllerGroupByOutputType[P]>
            : GetScalarType<T[P], ControllerGroupByOutputType[P]>
        }
      >
    >


  export type ControllerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    controllerId?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    institutionId?: boolean
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    bottles_cap?: boolean | Controller$bottles_capArgs<ExtArgs>
    _count?: boolean | ControllerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["controller"]>

  export type ControllerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    controllerId?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    institutionId?: boolean
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["controller"]>

  export type ControllerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    controllerId?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    institutionId?: boolean
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["controller"]>

  export type ControllerSelectScalar = {
    code?: boolean
    controllerId?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    institutionId?: boolean
  }

  export type ControllerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "controllerId" | "name" | "status" | "createdAt" | "institutionId", ExtArgs["result"]["controller"]>
  export type ControllerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    bottles_cap?: boolean | Controller$bottles_capArgs<ExtArgs>
    _count?: boolean | ControllerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ControllerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }
  export type ControllerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }

  export type $ControllerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Controller"
    objects: {
      Institution: Prisma.$InstitutionPayload<ExtArgs>
      bottles_cap: Prisma.$BottleCapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      controllerId: number
      name: string
      status: boolean
      createdAt: Date
      institutionId: number
    }, ExtArgs["result"]["controller"]>
    composites: {}
  }

  type ControllerGetPayload<S extends boolean | null | undefined | ControllerDefaultArgs> = $Result.GetResult<Prisma.$ControllerPayload, S>

  type ControllerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ControllerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ControllerCountAggregateInputType | true
    }

  export interface ControllerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Controller'], meta: { name: 'Controller' } }
    /**
     * Find zero or one Controller that matches the filter.
     * @param {ControllerFindUniqueArgs} args - Arguments to find a Controller
     * @example
     * // Get one Controller
     * const controller = await prisma.controller.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ControllerFindUniqueArgs>(args: SelectSubset<T, ControllerFindUniqueArgs<ExtArgs>>): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Controller that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ControllerFindUniqueOrThrowArgs} args - Arguments to find a Controller
     * @example
     * // Get one Controller
     * const controller = await prisma.controller.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ControllerFindUniqueOrThrowArgs>(args: SelectSubset<T, ControllerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Controller that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControllerFindFirstArgs} args - Arguments to find a Controller
     * @example
     * // Get one Controller
     * const controller = await prisma.controller.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ControllerFindFirstArgs>(args?: SelectSubset<T, ControllerFindFirstArgs<ExtArgs>>): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Controller that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControllerFindFirstOrThrowArgs} args - Arguments to find a Controller
     * @example
     * // Get one Controller
     * const controller = await prisma.controller.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ControllerFindFirstOrThrowArgs>(args?: SelectSubset<T, ControllerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Controllers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControllerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Controllers
     * const controllers = await prisma.controller.findMany()
     * 
     * // Get first 10 Controllers
     * const controllers = await prisma.controller.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const controllerWithCodeOnly = await prisma.controller.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends ControllerFindManyArgs>(args?: SelectSubset<T, ControllerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Controller.
     * @param {ControllerCreateArgs} args - Arguments to create a Controller.
     * @example
     * // Create one Controller
     * const Controller = await prisma.controller.create({
     *   data: {
     *     // ... data to create a Controller
     *   }
     * })
     * 
     */
    create<T extends ControllerCreateArgs>(args: SelectSubset<T, ControllerCreateArgs<ExtArgs>>): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Controllers.
     * @param {ControllerCreateManyArgs} args - Arguments to create many Controllers.
     * @example
     * // Create many Controllers
     * const controller = await prisma.controller.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ControllerCreateManyArgs>(args?: SelectSubset<T, ControllerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Controllers and returns the data saved in the database.
     * @param {ControllerCreateManyAndReturnArgs} args - Arguments to create many Controllers.
     * @example
     * // Create many Controllers
     * const controller = await prisma.controller.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Controllers and only return the `code`
     * const controllerWithCodeOnly = await prisma.controller.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ControllerCreateManyAndReturnArgs>(args?: SelectSubset<T, ControllerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Controller.
     * @param {ControllerDeleteArgs} args - Arguments to delete one Controller.
     * @example
     * // Delete one Controller
     * const Controller = await prisma.controller.delete({
     *   where: {
     *     // ... filter to delete one Controller
     *   }
     * })
     * 
     */
    delete<T extends ControllerDeleteArgs>(args: SelectSubset<T, ControllerDeleteArgs<ExtArgs>>): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Controller.
     * @param {ControllerUpdateArgs} args - Arguments to update one Controller.
     * @example
     * // Update one Controller
     * const controller = await prisma.controller.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ControllerUpdateArgs>(args: SelectSubset<T, ControllerUpdateArgs<ExtArgs>>): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Controllers.
     * @param {ControllerDeleteManyArgs} args - Arguments to filter Controllers to delete.
     * @example
     * // Delete a few Controllers
     * const { count } = await prisma.controller.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ControllerDeleteManyArgs>(args?: SelectSubset<T, ControllerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Controllers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControllerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Controllers
     * const controller = await prisma.controller.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ControllerUpdateManyArgs>(args: SelectSubset<T, ControllerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Controllers and returns the data updated in the database.
     * @param {ControllerUpdateManyAndReturnArgs} args - Arguments to update many Controllers.
     * @example
     * // Update many Controllers
     * const controller = await prisma.controller.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Controllers and only return the `code`
     * const controllerWithCodeOnly = await prisma.controller.updateManyAndReturn({
     *   select: { code: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ControllerUpdateManyAndReturnArgs>(args: SelectSubset<T, ControllerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Controller.
     * @param {ControllerUpsertArgs} args - Arguments to update or create a Controller.
     * @example
     * // Update or create a Controller
     * const controller = await prisma.controller.upsert({
     *   create: {
     *     // ... data to create a Controller
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Controller we want to update
     *   }
     * })
     */
    upsert<T extends ControllerUpsertArgs>(args: SelectSubset<T, ControllerUpsertArgs<ExtArgs>>): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Controllers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControllerCountArgs} args - Arguments to filter Controllers to count.
     * @example
     * // Count the number of Controllers
     * const count = await prisma.controller.count({
     *   where: {
     *     // ... the filter for the Controllers we want to count
     *   }
     * })
    **/
    count<T extends ControllerCountArgs>(
      args?: Subset<T, ControllerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ControllerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Controller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControllerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ControllerAggregateArgs>(args: Subset<T, ControllerAggregateArgs>): Prisma.PrismaPromise<GetControllerAggregateType<T>>

    /**
     * Group by Controller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControllerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ControllerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ControllerGroupByArgs['orderBy'] }
        : { orderBy?: ControllerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ControllerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetControllerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Controller model
   */
  readonly fields: ControllerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Controller.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ControllerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Institution<T extends InstitutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionDefaultArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bottles_cap<T extends Controller$bottles_capArgs<ExtArgs> = {}>(args?: Subset<T, Controller$bottles_capArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BottleCapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Controller model
   */
  interface ControllerFieldRefs {
    readonly code: FieldRef<"Controller", 'String'>
    readonly controllerId: FieldRef<"Controller", 'Int'>
    readonly name: FieldRef<"Controller", 'String'>
    readonly status: FieldRef<"Controller", 'Boolean'>
    readonly createdAt: FieldRef<"Controller", 'DateTime'>
    readonly institutionId: FieldRef<"Controller", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Controller findUnique
   */
  export type ControllerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Controller
     */
    omit?: ControllerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * Filter, which Controller to fetch.
     */
    where: ControllerWhereUniqueInput
  }

  /**
   * Controller findUniqueOrThrow
   */
  export type ControllerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Controller
     */
    omit?: ControllerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * Filter, which Controller to fetch.
     */
    where: ControllerWhereUniqueInput
  }

  /**
   * Controller findFirst
   */
  export type ControllerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Controller
     */
    omit?: ControllerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * Filter, which Controller to fetch.
     */
    where?: ControllerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controllers to fetch.
     */
    orderBy?: ControllerOrderByWithRelationInput | ControllerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Controllers.
     */
    cursor?: ControllerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controllers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controllers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Controllers.
     */
    distinct?: ControllerScalarFieldEnum | ControllerScalarFieldEnum[]
  }

  /**
   * Controller findFirstOrThrow
   */
  export type ControllerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Controller
     */
    omit?: ControllerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * Filter, which Controller to fetch.
     */
    where?: ControllerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controllers to fetch.
     */
    orderBy?: ControllerOrderByWithRelationInput | ControllerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Controllers.
     */
    cursor?: ControllerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controllers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controllers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Controllers.
     */
    distinct?: ControllerScalarFieldEnum | ControllerScalarFieldEnum[]
  }

  /**
   * Controller findMany
   */
  export type ControllerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Controller
     */
    omit?: ControllerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * Filter, which Controllers to fetch.
     */
    where?: ControllerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controllers to fetch.
     */
    orderBy?: ControllerOrderByWithRelationInput | ControllerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Controllers.
     */
    cursor?: ControllerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controllers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controllers.
     */
    skip?: number
    distinct?: ControllerScalarFieldEnum | ControllerScalarFieldEnum[]
  }

  /**
   * Controller create
   */
  export type ControllerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Controller
     */
    omit?: ControllerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * The data needed to create a Controller.
     */
    data: XOR<ControllerCreateInput, ControllerUncheckedCreateInput>
  }

  /**
   * Controller createMany
   */
  export type ControllerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Controllers.
     */
    data: ControllerCreateManyInput | ControllerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Controller createManyAndReturn
   */
  export type ControllerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Controller
     */
    omit?: ControllerOmit<ExtArgs> | null
    /**
     * The data used to create many Controllers.
     */
    data: ControllerCreateManyInput | ControllerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControllerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Controller update
   */
  export type ControllerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Controller
     */
    omit?: ControllerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * The data needed to update a Controller.
     */
    data: XOR<ControllerUpdateInput, ControllerUncheckedUpdateInput>
    /**
     * Choose, which Controller to update.
     */
    where: ControllerWhereUniqueInput
  }

  /**
   * Controller updateMany
   */
  export type ControllerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Controllers.
     */
    data: XOR<ControllerUpdateManyMutationInput, ControllerUncheckedUpdateManyInput>
    /**
     * Filter which Controllers to update
     */
    where?: ControllerWhereInput
    /**
     * Limit how many Controllers to update.
     */
    limit?: number
  }

  /**
   * Controller updateManyAndReturn
   */
  export type ControllerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Controller
     */
    omit?: ControllerOmit<ExtArgs> | null
    /**
     * The data used to update Controllers.
     */
    data: XOR<ControllerUpdateManyMutationInput, ControllerUncheckedUpdateManyInput>
    /**
     * Filter which Controllers to update
     */
    where?: ControllerWhereInput
    /**
     * Limit how many Controllers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControllerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Controller upsert
   */
  export type ControllerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Controller
     */
    omit?: ControllerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * The filter to search for the Controller to update in case it exists.
     */
    where: ControllerWhereUniqueInput
    /**
     * In case the Controller found by the `where` argument doesn't exist, create a new Controller with this data.
     */
    create: XOR<ControllerCreateInput, ControllerUncheckedCreateInput>
    /**
     * In case the Controller was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ControllerUpdateInput, ControllerUncheckedUpdateInput>
  }

  /**
   * Controller delete
   */
  export type ControllerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Controller
     */
    omit?: ControllerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * Filter which Controller to delete.
     */
    where: ControllerWhereUniqueInput
  }

  /**
   * Controller deleteMany
   */
  export type ControllerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Controllers to delete
     */
    where?: ControllerWhereInput
    /**
     * Limit how many Controllers to delete.
     */
    limit?: number
  }

  /**
   * Controller.bottles_cap
   */
  export type Controller$bottles_capArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottleCap
     */
    select?: BottleCapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottleCap
     */
    omit?: BottleCapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BottleCapInclude<ExtArgs> | null
    where?: BottleCapWhereInput
    orderBy?: BottleCapOrderByWithRelationInput | BottleCapOrderByWithRelationInput[]
    cursor?: BottleCapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BottleCapScalarFieldEnum | BottleCapScalarFieldEnum[]
  }

  /**
   * Controller without action
   */
  export type ControllerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Controller
     */
    omit?: ControllerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControllerInclude<ExtArgs> | null
  }


  /**
   * Model Institution
   */

  export type AggregateInstitution = {
    _count: InstitutionCountAggregateOutputType | null
    _avg: InstitutionAvgAggregateOutputType | null
    _sum: InstitutionSumAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  export type InstitutionAvgAggregateOutputType = {
    institutionId: number | null
  }

  export type InstitutionSumAggregateOutputType = {
    institutionId: number | null
  }

  export type InstitutionMinAggregateOutputType = {
    institutionId: number | null
    name: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstitutionMaxAggregateOutputType = {
    institutionId: number | null
    name: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstitutionCountAggregateOutputType = {
    institutionId: number
    name: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InstitutionAvgAggregateInputType = {
    institutionId?: true
  }

  export type InstitutionSumAggregateInputType = {
    institutionId?: true
  }

  export type InstitutionMinAggregateInputType = {
    institutionId?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstitutionMaxAggregateInputType = {
    institutionId?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstitutionCountAggregateInputType = {
    institutionId?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InstitutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institution to aggregate.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Institutions
    **/
    _count?: true | InstitutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstitutionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstitutionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstitutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstitutionMaxAggregateInputType
  }

  export type GetInstitutionAggregateType<T extends InstitutionAggregateArgs> = {
        [P in keyof T & keyof AggregateInstitution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitution[P]>
      : GetScalarType<T[P], AggregateInstitution[P]>
  }




  export type InstitutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionWhereInput
    orderBy?: InstitutionOrderByWithAggregationInput | InstitutionOrderByWithAggregationInput[]
    by: InstitutionScalarFieldEnum[] | InstitutionScalarFieldEnum
    having?: InstitutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstitutionCountAggregateInputType | true
    _avg?: InstitutionAvgAggregateInputType
    _sum?: InstitutionSumAggregateInputType
    _min?: InstitutionMinAggregateInputType
    _max?: InstitutionMaxAggregateInputType
  }

  export type InstitutionGroupByOutputType = {
    institutionId: number
    name: string
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: InstitutionCountAggregateOutputType | null
    _avg: InstitutionAvgAggregateOutputType | null
    _sum: InstitutionSumAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  type GetInstitutionGroupByPayload<T extends InstitutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstitutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstitutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
            : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
        }
      >
    >


  export type InstitutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    institutionId?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    controllers?: boolean | Institution$controllersArgs<ExtArgs>
    operators?: boolean | Institution$operatorsArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    institutionId?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    institutionId?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectScalar = {
    institutionId?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InstitutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"institutionId" | "name" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["institution"]>
  export type InstitutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    controllers?: boolean | Institution$controllersArgs<ExtArgs>
    operators?: boolean | Institution$operatorsArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstitutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstitutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstitutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Institution"
    objects: {
      controllers: Prisma.$ControllerPayload<ExtArgs>[]
      operators: Prisma.$OperatorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      institutionId: number
      name: string
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["institution"]>
    composites: {}
  }

  type InstitutionGetPayload<S extends boolean | null | undefined | InstitutionDefaultArgs> = $Result.GetResult<Prisma.$InstitutionPayload, S>

  type InstitutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstitutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstitutionCountAggregateInputType | true
    }

  export interface InstitutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Institution'], meta: { name: 'Institution' } }
    /**
     * Find zero or one Institution that matches the filter.
     * @param {InstitutionFindUniqueArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstitutionFindUniqueArgs>(args: SelectSubset<T, InstitutionFindUniqueArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Institution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstitutionFindUniqueOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstitutionFindUniqueOrThrowArgs>(args: SelectSubset<T, InstitutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstitutionFindFirstArgs>(args?: SelectSubset<T, InstitutionFindFirstArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstitutionFindFirstOrThrowArgs>(args?: SelectSubset<T, InstitutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Institutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Institutions
     * const institutions = await prisma.institution.findMany()
     * 
     * // Get first 10 Institutions
     * const institutions = await prisma.institution.findMany({ take: 10 })
     * 
     * // Only select the `institutionId`
     * const institutionWithInstitutionIdOnly = await prisma.institution.findMany({ select: { institutionId: true } })
     * 
     */
    findMany<T extends InstitutionFindManyArgs>(args?: SelectSubset<T, InstitutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Institution.
     * @param {InstitutionCreateArgs} args - Arguments to create a Institution.
     * @example
     * // Create one Institution
     * const Institution = await prisma.institution.create({
     *   data: {
     *     // ... data to create a Institution
     *   }
     * })
     * 
     */
    create<T extends InstitutionCreateArgs>(args: SelectSubset<T, InstitutionCreateArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Institutions.
     * @param {InstitutionCreateManyArgs} args - Arguments to create many Institutions.
     * @example
     * // Create many Institutions
     * const institution = await prisma.institution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstitutionCreateManyArgs>(args?: SelectSubset<T, InstitutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Institutions and returns the data saved in the database.
     * @param {InstitutionCreateManyAndReturnArgs} args - Arguments to create many Institutions.
     * @example
     * // Create many Institutions
     * const institution = await prisma.institution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Institutions and only return the `institutionId`
     * const institutionWithInstitutionIdOnly = await prisma.institution.createManyAndReturn({
     *   select: { institutionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstitutionCreateManyAndReturnArgs>(args?: SelectSubset<T, InstitutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Institution.
     * @param {InstitutionDeleteArgs} args - Arguments to delete one Institution.
     * @example
     * // Delete one Institution
     * const Institution = await prisma.institution.delete({
     *   where: {
     *     // ... filter to delete one Institution
     *   }
     * })
     * 
     */
    delete<T extends InstitutionDeleteArgs>(args: SelectSubset<T, InstitutionDeleteArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Institution.
     * @param {InstitutionUpdateArgs} args - Arguments to update one Institution.
     * @example
     * // Update one Institution
     * const institution = await prisma.institution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstitutionUpdateArgs>(args: SelectSubset<T, InstitutionUpdateArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Institutions.
     * @param {InstitutionDeleteManyArgs} args - Arguments to filter Institutions to delete.
     * @example
     * // Delete a few Institutions
     * const { count } = await prisma.institution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstitutionDeleteManyArgs>(args?: SelectSubset<T, InstitutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstitutionUpdateManyArgs>(args: SelectSubset<T, InstitutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions and returns the data updated in the database.
     * @param {InstitutionUpdateManyAndReturnArgs} args - Arguments to update many Institutions.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Institutions and only return the `institutionId`
     * const institutionWithInstitutionIdOnly = await prisma.institution.updateManyAndReturn({
     *   select: { institutionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstitutionUpdateManyAndReturnArgs>(args: SelectSubset<T, InstitutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Institution.
     * @param {InstitutionUpsertArgs} args - Arguments to update or create a Institution.
     * @example
     * // Update or create a Institution
     * const institution = await prisma.institution.upsert({
     *   create: {
     *     // ... data to create a Institution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Institution we want to update
     *   }
     * })
     */
    upsert<T extends InstitutionUpsertArgs>(args: SelectSubset<T, InstitutionUpsertArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionCountArgs} args - Arguments to filter Institutions to count.
     * @example
     * // Count the number of Institutions
     * const count = await prisma.institution.count({
     *   where: {
     *     // ... the filter for the Institutions we want to count
     *   }
     * })
    **/
    count<T extends InstitutionCountArgs>(
      args?: Subset<T, InstitutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstitutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstitutionAggregateArgs>(args: Subset<T, InstitutionAggregateArgs>): Prisma.PrismaPromise<GetInstitutionAggregateType<T>>

    /**
     * Group by Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstitutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstitutionGroupByArgs['orderBy'] }
        : { orderBy?: InstitutionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstitutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstitutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Institution model
   */
  readonly fields: InstitutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Institution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstitutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    controllers<T extends Institution$controllersArgs<ExtArgs> = {}>(args?: Subset<T, Institution$controllersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    operators<T extends Institution$operatorsArgs<ExtArgs> = {}>(args?: Subset<T, Institution$operatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Institution model
   */
  interface InstitutionFieldRefs {
    readonly institutionId: FieldRef<"Institution", 'Int'>
    readonly name: FieldRef<"Institution", 'String'>
    readonly status: FieldRef<"Institution", 'Boolean'>
    readonly createdAt: FieldRef<"Institution", 'DateTime'>
    readonly updatedAt: FieldRef<"Institution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Institution findUnique
   */
  export type InstitutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution findUniqueOrThrow
   */
  export type InstitutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution findFirst
   */
  export type InstitutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution findFirstOrThrow
   */
  export type InstitutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution findMany
   */
  export type InstitutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institutions to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution create
   */
  export type InstitutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The data needed to create a Institution.
     */
    data: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
  }

  /**
   * Institution createMany
   */
  export type InstitutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Institutions.
     */
    data: InstitutionCreateManyInput | InstitutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Institution createManyAndReturn
   */
  export type InstitutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * The data used to create many Institutions.
     */
    data: InstitutionCreateManyInput | InstitutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Institution update
   */
  export type InstitutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The data needed to update a Institution.
     */
    data: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
    /**
     * Choose, which Institution to update.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution updateMany
   */
  export type InstitutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Institutions.
     */
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyInput>
    /**
     * Filter which Institutions to update
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to update.
     */
    limit?: number
  }

  /**
   * Institution updateManyAndReturn
   */
  export type InstitutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * The data used to update Institutions.
     */
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyInput>
    /**
     * Filter which Institutions to update
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to update.
     */
    limit?: number
  }

  /**
   * Institution upsert
   */
  export type InstitutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The filter to search for the Institution to update in case it exists.
     */
    where: InstitutionWhereUniqueInput
    /**
     * In case the Institution found by the `where` argument doesn't exist, create a new Institution with this data.
     */
    create: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
    /**
     * In case the Institution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
  }

  /**
   * Institution delete
   */
  export type InstitutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter which Institution to delete.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution deleteMany
   */
  export type InstitutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institutions to delete
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to delete.
     */
    limit?: number
  }

  /**
   * Institution.controllers
   */
  export type Institution$controllersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Controller
     */
    omit?: ControllerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControllerInclude<ExtArgs> | null
    where?: ControllerWhereInput
    orderBy?: ControllerOrderByWithRelationInput | ControllerOrderByWithRelationInput[]
    cursor?: ControllerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ControllerScalarFieldEnum | ControllerScalarFieldEnum[]
  }

  /**
   * Institution.operators
   */
  export type Institution$operatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    where?: OperatorWhereInput
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    cursor?: OperatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[]
  }

  /**
   * Institution without action
   */
  export type InstitutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
  }


  /**
   * Model Operator
   */

  export type AggregateOperator = {
    _count: OperatorCountAggregateOutputType | null
    _avg: OperatorAvgAggregateOutputType | null
    _sum: OperatorSumAggregateOutputType | null
    _min: OperatorMinAggregateOutputType | null
    _max: OperatorMaxAggregateOutputType | null
  }

  export type OperatorAvgAggregateOutputType = {
    operatorId: number | null
    institutionId: number | null
  }

  export type OperatorSumAggregateOutputType = {
    operatorId: number | null
    institutionId: number | null
  }

  export type OperatorMinAggregateOutputType = {
    operatorId: number | null
    username: string | null
    name: string | null
    password: string | null
    type: $Enums.UserType | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    institutionId: number | null
  }

  export type OperatorMaxAggregateOutputType = {
    operatorId: number | null
    username: string | null
    name: string | null
    password: string | null
    type: $Enums.UserType | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    institutionId: number | null
  }

  export type OperatorCountAggregateOutputType = {
    operatorId: number
    username: number
    name: number
    password: number
    type: number
    status: number
    createdAt: number
    updatedAt: number
    institutionId: number
    _all: number
  }


  export type OperatorAvgAggregateInputType = {
    operatorId?: true
    institutionId?: true
  }

  export type OperatorSumAggregateInputType = {
    operatorId?: true
    institutionId?: true
  }

  export type OperatorMinAggregateInputType = {
    operatorId?: true
    username?: true
    name?: true
    password?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    institutionId?: true
  }

  export type OperatorMaxAggregateInputType = {
    operatorId?: true
    username?: true
    name?: true
    password?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    institutionId?: true
  }

  export type OperatorCountAggregateInputType = {
    operatorId?: true
    username?: true
    name?: true
    password?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    institutionId?: true
    _all?: true
  }

  export type OperatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operator to aggregate.
     */
    where?: OperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operators to fetch.
     */
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operators
    **/
    _count?: true | OperatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperatorMaxAggregateInputType
  }

  export type GetOperatorAggregateType<T extends OperatorAggregateArgs> = {
        [P in keyof T & keyof AggregateOperator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperator[P]>
      : GetScalarType<T[P], AggregateOperator[P]>
  }




  export type OperatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperatorWhereInput
    orderBy?: OperatorOrderByWithAggregationInput | OperatorOrderByWithAggregationInput[]
    by: OperatorScalarFieldEnum[] | OperatorScalarFieldEnum
    having?: OperatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperatorCountAggregateInputType | true
    _avg?: OperatorAvgAggregateInputType
    _sum?: OperatorSumAggregateInputType
    _min?: OperatorMinAggregateInputType
    _max?: OperatorMaxAggregateInputType
  }

  export type OperatorGroupByOutputType = {
    operatorId: number
    username: string
    name: string
    password: string
    type: $Enums.UserType
    status: boolean
    createdAt: Date
    updatedAt: Date
    institutionId: number | null
    _count: OperatorCountAggregateOutputType | null
    _avg: OperatorAvgAggregateOutputType | null
    _sum: OperatorSumAggregateOutputType | null
    _min: OperatorMinAggregateOutputType | null
    _max: OperatorMaxAggregateOutputType | null
  }

  type GetOperatorGroupByPayload<T extends OperatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperatorGroupByOutputType[P]>
            : GetScalarType<T[P], OperatorGroupByOutputType[P]>
        }
      >
    >


  export type OperatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    operatorId?: boolean
    username?: boolean
    name?: boolean
    password?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institutionId?: boolean
    Institution?: boolean | Operator$InstitutionArgs<ExtArgs>
  }, ExtArgs["result"]["operator"]>

  export type OperatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    operatorId?: boolean
    username?: boolean
    name?: boolean
    password?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institutionId?: boolean
    Institution?: boolean | Operator$InstitutionArgs<ExtArgs>
  }, ExtArgs["result"]["operator"]>

  export type OperatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    operatorId?: boolean
    username?: boolean
    name?: boolean
    password?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institutionId?: boolean
    Institution?: boolean | Operator$InstitutionArgs<ExtArgs>
  }, ExtArgs["result"]["operator"]>

  export type OperatorSelectScalar = {
    operatorId?: boolean
    username?: boolean
    name?: boolean
    password?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institutionId?: boolean
  }

  export type OperatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"operatorId" | "username" | "name" | "password" | "type" | "status" | "createdAt" | "updatedAt" | "institutionId", ExtArgs["result"]["operator"]>
  export type OperatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Institution?: boolean | Operator$InstitutionArgs<ExtArgs>
  }
  export type OperatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Institution?: boolean | Operator$InstitutionArgs<ExtArgs>
  }
  export type OperatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Institution?: boolean | Operator$InstitutionArgs<ExtArgs>
  }

  export type $OperatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operator"
    objects: {
      Institution: Prisma.$InstitutionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      operatorId: number
      username: string
      name: string
      password: string
      type: $Enums.UserType
      status: boolean
      createdAt: Date
      updatedAt: Date
      institutionId: number | null
    }, ExtArgs["result"]["operator"]>
    composites: {}
  }

  type OperatorGetPayload<S extends boolean | null | undefined | OperatorDefaultArgs> = $Result.GetResult<Prisma.$OperatorPayload, S>

  type OperatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OperatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperatorCountAggregateInputType | true
    }

  export interface OperatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operator'], meta: { name: 'Operator' } }
    /**
     * Find zero or one Operator that matches the filter.
     * @param {OperatorFindUniqueArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperatorFindUniqueArgs>(args: SelectSubset<T, OperatorFindUniqueArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperatorFindUniqueOrThrowArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperatorFindUniqueOrThrowArgs>(args: SelectSubset<T, OperatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorFindFirstArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperatorFindFirstArgs>(args?: SelectSubset<T, OperatorFindFirstArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorFindFirstOrThrowArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperatorFindFirstOrThrowArgs>(args?: SelectSubset<T, OperatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operators
     * const operators = await prisma.operator.findMany()
     * 
     * // Get first 10 Operators
     * const operators = await prisma.operator.findMany({ take: 10 })
     * 
     * // Only select the `operatorId`
     * const operatorWithOperatorIdOnly = await prisma.operator.findMany({ select: { operatorId: true } })
     * 
     */
    findMany<T extends OperatorFindManyArgs>(args?: SelectSubset<T, OperatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operator.
     * @param {OperatorCreateArgs} args - Arguments to create a Operator.
     * @example
     * // Create one Operator
     * const Operator = await prisma.operator.create({
     *   data: {
     *     // ... data to create a Operator
     *   }
     * })
     * 
     */
    create<T extends OperatorCreateArgs>(args: SelectSubset<T, OperatorCreateArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operators.
     * @param {OperatorCreateManyArgs} args - Arguments to create many Operators.
     * @example
     * // Create many Operators
     * const operator = await prisma.operator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperatorCreateManyArgs>(args?: SelectSubset<T, OperatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operators and returns the data saved in the database.
     * @param {OperatorCreateManyAndReturnArgs} args - Arguments to create many Operators.
     * @example
     * // Create many Operators
     * const operator = await prisma.operator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operators and only return the `operatorId`
     * const operatorWithOperatorIdOnly = await prisma.operator.createManyAndReturn({
     *   select: { operatorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperatorCreateManyAndReturnArgs>(args?: SelectSubset<T, OperatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Operator.
     * @param {OperatorDeleteArgs} args - Arguments to delete one Operator.
     * @example
     * // Delete one Operator
     * const Operator = await prisma.operator.delete({
     *   where: {
     *     // ... filter to delete one Operator
     *   }
     * })
     * 
     */
    delete<T extends OperatorDeleteArgs>(args: SelectSubset<T, OperatorDeleteArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operator.
     * @param {OperatorUpdateArgs} args - Arguments to update one Operator.
     * @example
     * // Update one Operator
     * const operator = await prisma.operator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperatorUpdateArgs>(args: SelectSubset<T, OperatorUpdateArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operators.
     * @param {OperatorDeleteManyArgs} args - Arguments to filter Operators to delete.
     * @example
     * // Delete a few Operators
     * const { count } = await prisma.operator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperatorDeleteManyArgs>(args?: SelectSubset<T, OperatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operators
     * const operator = await prisma.operator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperatorUpdateManyArgs>(args: SelectSubset<T, OperatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operators and returns the data updated in the database.
     * @param {OperatorUpdateManyAndReturnArgs} args - Arguments to update many Operators.
     * @example
     * // Update many Operators
     * const operator = await prisma.operator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Operators and only return the `operatorId`
     * const operatorWithOperatorIdOnly = await prisma.operator.updateManyAndReturn({
     *   select: { operatorId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OperatorUpdateManyAndReturnArgs>(args: SelectSubset<T, OperatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Operator.
     * @param {OperatorUpsertArgs} args - Arguments to update or create a Operator.
     * @example
     * // Update or create a Operator
     * const operator = await prisma.operator.upsert({
     *   create: {
     *     // ... data to create a Operator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operator we want to update
     *   }
     * })
     */
    upsert<T extends OperatorUpsertArgs>(args: SelectSubset<T, OperatorUpsertArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorCountArgs} args - Arguments to filter Operators to count.
     * @example
     * // Count the number of Operators
     * const count = await prisma.operator.count({
     *   where: {
     *     // ... the filter for the Operators we want to count
     *   }
     * })
    **/
    count<T extends OperatorCountArgs>(
      args?: Subset<T, OperatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OperatorAggregateArgs>(args: Subset<T, OperatorAggregateArgs>): Prisma.PrismaPromise<GetOperatorAggregateType<T>>

    /**
     * Group by Operator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OperatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperatorGroupByArgs['orderBy'] }
        : { orderBy?: OperatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OperatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operator model
   */
  readonly fields: OperatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Institution<T extends Operator$InstitutionArgs<ExtArgs> = {}>(args?: Subset<T, Operator$InstitutionArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Operator model
   */
  interface OperatorFieldRefs {
    readonly operatorId: FieldRef<"Operator", 'Int'>
    readonly username: FieldRef<"Operator", 'String'>
    readonly name: FieldRef<"Operator", 'String'>
    readonly password: FieldRef<"Operator", 'String'>
    readonly type: FieldRef<"Operator", 'UserType'>
    readonly status: FieldRef<"Operator", 'Boolean'>
    readonly createdAt: FieldRef<"Operator", 'DateTime'>
    readonly updatedAt: FieldRef<"Operator", 'DateTime'>
    readonly institutionId: FieldRef<"Operator", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Operator findUnique
   */
  export type OperatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter, which Operator to fetch.
     */
    where: OperatorWhereUniqueInput
  }

  /**
   * Operator findUniqueOrThrow
   */
  export type OperatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter, which Operator to fetch.
     */
    where: OperatorWhereUniqueInput
  }

  /**
   * Operator findFirst
   */
  export type OperatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter, which Operator to fetch.
     */
    where?: OperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operators to fetch.
     */
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operators.
     */
    cursor?: OperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operators.
     */
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[]
  }

  /**
   * Operator findFirstOrThrow
   */
  export type OperatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter, which Operator to fetch.
     */
    where?: OperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operators to fetch.
     */
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operators.
     */
    cursor?: OperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operators.
     */
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[]
  }

  /**
   * Operator findMany
   */
  export type OperatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter, which Operators to fetch.
     */
    where?: OperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operators to fetch.
     */
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operators.
     */
    cursor?: OperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operators.
     */
    skip?: number
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[]
  }

  /**
   * Operator create
   */
  export type OperatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Operator.
     */
    data: XOR<OperatorCreateInput, OperatorUncheckedCreateInput>
  }

  /**
   * Operator createMany
   */
  export type OperatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operators.
     */
    data: OperatorCreateManyInput | OperatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Operator createManyAndReturn
   */
  export type OperatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * The data used to create many Operators.
     */
    data: OperatorCreateManyInput | OperatorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Operator update
   */
  export type OperatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Operator.
     */
    data: XOR<OperatorUpdateInput, OperatorUncheckedUpdateInput>
    /**
     * Choose, which Operator to update.
     */
    where: OperatorWhereUniqueInput
  }

  /**
   * Operator updateMany
   */
  export type OperatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operators.
     */
    data: XOR<OperatorUpdateManyMutationInput, OperatorUncheckedUpdateManyInput>
    /**
     * Filter which Operators to update
     */
    where?: OperatorWhereInput
    /**
     * Limit how many Operators to update.
     */
    limit?: number
  }

  /**
   * Operator updateManyAndReturn
   */
  export type OperatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * The data used to update Operators.
     */
    data: XOR<OperatorUpdateManyMutationInput, OperatorUncheckedUpdateManyInput>
    /**
     * Filter which Operators to update
     */
    where?: OperatorWhereInput
    /**
     * Limit how many Operators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Operator upsert
   */
  export type OperatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Operator to update in case it exists.
     */
    where: OperatorWhereUniqueInput
    /**
     * In case the Operator found by the `where` argument doesn't exist, create a new Operator with this data.
     */
    create: XOR<OperatorCreateInput, OperatorUncheckedCreateInput>
    /**
     * In case the Operator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperatorUpdateInput, OperatorUncheckedUpdateInput>
  }

  /**
   * Operator delete
   */
  export type OperatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter which Operator to delete.
     */
    where: OperatorWhereUniqueInput
  }

  /**
   * Operator deleteMany
   */
  export type OperatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operators to delete
     */
    where?: OperatorWhereInput
    /**
     * Limit how many Operators to delete.
     */
    limit?: number
  }

  /**
   * Operator.Institution
   */
  export type Operator$InstitutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    where?: InstitutionWhereInput
  }

  /**
   * Operator without action
   */
  export type OperatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BottleCapScalarFieldEnum: {
    bottleCapId: 'bottleCapId',
    createdAt: 'createdAt',
    controllerCode: 'controllerCode'
  };

  export type BottleCapScalarFieldEnum = (typeof BottleCapScalarFieldEnum)[keyof typeof BottleCapScalarFieldEnum]


  export const ControllerScalarFieldEnum: {
    code: 'code',
    controllerId: 'controllerId',
    name: 'name',
    status: 'status',
    createdAt: 'createdAt',
    institutionId: 'institutionId'
  };

  export type ControllerScalarFieldEnum = (typeof ControllerScalarFieldEnum)[keyof typeof ControllerScalarFieldEnum]


  export const InstitutionScalarFieldEnum: {
    institutionId: 'institutionId',
    name: 'name',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InstitutionScalarFieldEnum = (typeof InstitutionScalarFieldEnum)[keyof typeof InstitutionScalarFieldEnum]


  export const OperatorScalarFieldEnum: {
    operatorId: 'operatorId',
    username: 'username',
    name: 'name',
    password: 'password',
    type: 'type',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    institutionId: 'institutionId'
  };

  export type OperatorScalarFieldEnum = (typeof OperatorScalarFieldEnum)[keyof typeof OperatorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BottleCapWhereInput = {
    AND?: BottleCapWhereInput | BottleCapWhereInput[]
    OR?: BottleCapWhereInput[]
    NOT?: BottleCapWhereInput | BottleCapWhereInput[]
    bottleCapId?: IntFilter<"BottleCap"> | number
    createdAt?: DateTimeFilter<"BottleCap"> | Date | string
    controllerCode?: StringFilter<"BottleCap"> | string
    controller?: XOR<ControllerScalarRelationFilter, ControllerWhereInput>
  }

  export type BottleCapOrderByWithRelationInput = {
    bottleCapId?: SortOrder
    createdAt?: SortOrder
    controllerCode?: SortOrder
    controller?: ControllerOrderByWithRelationInput
  }

  export type BottleCapWhereUniqueInput = Prisma.AtLeast<{
    bottleCapId?: number
    AND?: BottleCapWhereInput | BottleCapWhereInput[]
    OR?: BottleCapWhereInput[]
    NOT?: BottleCapWhereInput | BottleCapWhereInput[]
    createdAt?: DateTimeFilter<"BottleCap"> | Date | string
    controllerCode?: StringFilter<"BottleCap"> | string
    controller?: XOR<ControllerScalarRelationFilter, ControllerWhereInput>
  }, "bottleCapId">

  export type BottleCapOrderByWithAggregationInput = {
    bottleCapId?: SortOrder
    createdAt?: SortOrder
    controllerCode?: SortOrder
    _count?: BottleCapCountOrderByAggregateInput
    _avg?: BottleCapAvgOrderByAggregateInput
    _max?: BottleCapMaxOrderByAggregateInput
    _min?: BottleCapMinOrderByAggregateInput
    _sum?: BottleCapSumOrderByAggregateInput
  }

  export type BottleCapScalarWhereWithAggregatesInput = {
    AND?: BottleCapScalarWhereWithAggregatesInput | BottleCapScalarWhereWithAggregatesInput[]
    OR?: BottleCapScalarWhereWithAggregatesInput[]
    NOT?: BottleCapScalarWhereWithAggregatesInput | BottleCapScalarWhereWithAggregatesInput[]
    bottleCapId?: IntWithAggregatesFilter<"BottleCap"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BottleCap"> | Date | string
    controllerCode?: StringWithAggregatesFilter<"BottleCap"> | string
  }

  export type ControllerWhereInput = {
    AND?: ControllerWhereInput | ControllerWhereInput[]
    OR?: ControllerWhereInput[]
    NOT?: ControllerWhereInput | ControllerWhereInput[]
    code?: StringFilter<"Controller"> | string
    controllerId?: IntFilter<"Controller"> | number
    name?: StringFilter<"Controller"> | string
    status?: BoolFilter<"Controller"> | boolean
    createdAt?: DateTimeFilter<"Controller"> | Date | string
    institutionId?: IntFilter<"Controller"> | number
    Institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
    bottles_cap?: BottleCapListRelationFilter
  }

  export type ControllerOrderByWithRelationInput = {
    code?: SortOrder
    controllerId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    institutionId?: SortOrder
    Institution?: InstitutionOrderByWithRelationInput
    bottles_cap?: BottleCapOrderByRelationAggregateInput
  }

  export type ControllerWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: ControllerWhereInput | ControllerWhereInput[]
    OR?: ControllerWhereInput[]
    NOT?: ControllerWhereInput | ControllerWhereInput[]
    controllerId?: IntFilter<"Controller"> | number
    name?: StringFilter<"Controller"> | string
    status?: BoolFilter<"Controller"> | boolean
    createdAt?: DateTimeFilter<"Controller"> | Date | string
    institutionId?: IntFilter<"Controller"> | number
    Institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
    bottles_cap?: BottleCapListRelationFilter
  }, "code" | "code">

  export type ControllerOrderByWithAggregationInput = {
    code?: SortOrder
    controllerId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    institutionId?: SortOrder
    _count?: ControllerCountOrderByAggregateInput
    _avg?: ControllerAvgOrderByAggregateInput
    _max?: ControllerMaxOrderByAggregateInput
    _min?: ControllerMinOrderByAggregateInput
    _sum?: ControllerSumOrderByAggregateInput
  }

  export type ControllerScalarWhereWithAggregatesInput = {
    AND?: ControllerScalarWhereWithAggregatesInput | ControllerScalarWhereWithAggregatesInput[]
    OR?: ControllerScalarWhereWithAggregatesInput[]
    NOT?: ControllerScalarWhereWithAggregatesInput | ControllerScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Controller"> | string
    controllerId?: IntWithAggregatesFilter<"Controller"> | number
    name?: StringWithAggregatesFilter<"Controller"> | string
    status?: BoolWithAggregatesFilter<"Controller"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Controller"> | Date | string
    institutionId?: IntWithAggregatesFilter<"Controller"> | number
  }

  export type InstitutionWhereInput = {
    AND?: InstitutionWhereInput | InstitutionWhereInput[]
    OR?: InstitutionWhereInput[]
    NOT?: InstitutionWhereInput | InstitutionWhereInput[]
    institutionId?: IntFilter<"Institution"> | number
    name?: StringFilter<"Institution"> | string
    status?: BoolFilter<"Institution"> | boolean
    createdAt?: DateTimeFilter<"Institution"> | Date | string
    updatedAt?: DateTimeFilter<"Institution"> | Date | string
    controllers?: ControllerListRelationFilter
    operators?: OperatorListRelationFilter
  }

  export type InstitutionOrderByWithRelationInput = {
    institutionId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    controllers?: ControllerOrderByRelationAggregateInput
    operators?: OperatorOrderByRelationAggregateInput
  }

  export type InstitutionWhereUniqueInput = Prisma.AtLeast<{
    institutionId?: number
    name?: string
    AND?: InstitutionWhereInput | InstitutionWhereInput[]
    OR?: InstitutionWhereInput[]
    NOT?: InstitutionWhereInput | InstitutionWhereInput[]
    status?: BoolFilter<"Institution"> | boolean
    createdAt?: DateTimeFilter<"Institution"> | Date | string
    updatedAt?: DateTimeFilter<"Institution"> | Date | string
    controllers?: ControllerListRelationFilter
    operators?: OperatorListRelationFilter
  }, "institutionId" | "name">

  export type InstitutionOrderByWithAggregationInput = {
    institutionId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InstitutionCountOrderByAggregateInput
    _avg?: InstitutionAvgOrderByAggregateInput
    _max?: InstitutionMaxOrderByAggregateInput
    _min?: InstitutionMinOrderByAggregateInput
    _sum?: InstitutionSumOrderByAggregateInput
  }

  export type InstitutionScalarWhereWithAggregatesInput = {
    AND?: InstitutionScalarWhereWithAggregatesInput | InstitutionScalarWhereWithAggregatesInput[]
    OR?: InstitutionScalarWhereWithAggregatesInput[]
    NOT?: InstitutionScalarWhereWithAggregatesInput | InstitutionScalarWhereWithAggregatesInput[]
    institutionId?: IntWithAggregatesFilter<"Institution"> | number
    name?: StringWithAggregatesFilter<"Institution"> | string
    status?: BoolWithAggregatesFilter<"Institution"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Institution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Institution"> | Date | string
  }

  export type OperatorWhereInput = {
    AND?: OperatorWhereInput | OperatorWhereInput[]
    OR?: OperatorWhereInput[]
    NOT?: OperatorWhereInput | OperatorWhereInput[]
    operatorId?: IntFilter<"Operator"> | number
    username?: StringFilter<"Operator"> | string
    name?: StringFilter<"Operator"> | string
    password?: StringFilter<"Operator"> | string
    type?: EnumUserTypeFilter<"Operator"> | $Enums.UserType
    status?: BoolFilter<"Operator"> | boolean
    createdAt?: DateTimeFilter<"Operator"> | Date | string
    updatedAt?: DateTimeFilter<"Operator"> | Date | string
    institutionId?: IntNullableFilter<"Operator"> | number | null
    Institution?: XOR<InstitutionNullableScalarRelationFilter, InstitutionWhereInput> | null
  }

  export type OperatorOrderByWithRelationInput = {
    operatorId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    institutionId?: SortOrderInput | SortOrder
    Institution?: InstitutionOrderByWithRelationInput
  }

  export type OperatorWhereUniqueInput = Prisma.AtLeast<{
    operatorId?: number
    username?: string
    AND?: OperatorWhereInput | OperatorWhereInput[]
    OR?: OperatorWhereInput[]
    NOT?: OperatorWhereInput | OperatorWhereInput[]
    name?: StringFilter<"Operator"> | string
    password?: StringFilter<"Operator"> | string
    type?: EnumUserTypeFilter<"Operator"> | $Enums.UserType
    status?: BoolFilter<"Operator"> | boolean
    createdAt?: DateTimeFilter<"Operator"> | Date | string
    updatedAt?: DateTimeFilter<"Operator"> | Date | string
    institutionId?: IntNullableFilter<"Operator"> | number | null
    Institution?: XOR<InstitutionNullableScalarRelationFilter, InstitutionWhereInput> | null
  }, "operatorId" | "username">

  export type OperatorOrderByWithAggregationInput = {
    operatorId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    institutionId?: SortOrderInput | SortOrder
    _count?: OperatorCountOrderByAggregateInput
    _avg?: OperatorAvgOrderByAggregateInput
    _max?: OperatorMaxOrderByAggregateInput
    _min?: OperatorMinOrderByAggregateInput
    _sum?: OperatorSumOrderByAggregateInput
  }

  export type OperatorScalarWhereWithAggregatesInput = {
    AND?: OperatorScalarWhereWithAggregatesInput | OperatorScalarWhereWithAggregatesInput[]
    OR?: OperatorScalarWhereWithAggregatesInput[]
    NOT?: OperatorScalarWhereWithAggregatesInput | OperatorScalarWhereWithAggregatesInput[]
    operatorId?: IntWithAggregatesFilter<"Operator"> | number
    username?: StringWithAggregatesFilter<"Operator"> | string
    name?: StringWithAggregatesFilter<"Operator"> | string
    password?: StringWithAggregatesFilter<"Operator"> | string
    type?: EnumUserTypeWithAggregatesFilter<"Operator"> | $Enums.UserType
    status?: BoolWithAggregatesFilter<"Operator"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Operator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Operator"> | Date | string
    institutionId?: IntNullableWithAggregatesFilter<"Operator"> | number | null
  }

  export type BottleCapCreateInput = {
    createdAt?: Date | string
    controller: ControllerCreateNestedOneWithoutBottles_capInput
  }

  export type BottleCapUncheckedCreateInput = {
    bottleCapId?: number
    createdAt?: Date | string
    controllerCode: string
  }

  export type BottleCapUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controller?: ControllerUpdateOneRequiredWithoutBottles_capNestedInput
  }

  export type BottleCapUncheckedUpdateInput = {
    bottleCapId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controllerCode?: StringFieldUpdateOperationsInput | string
  }

  export type BottleCapCreateManyInput = {
    bottleCapId?: number
    createdAt?: Date | string
    controllerCode: string
  }

  export type BottleCapUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BottleCapUncheckedUpdateManyInput = {
    bottleCapId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controllerCode?: StringFieldUpdateOperationsInput | string
  }

  export type ControllerCreateInput = {
    code: string
    controllerId?: number
    name: string
    status: boolean
    createdAt?: Date | string
    Institution: InstitutionCreateNestedOneWithoutControllersInput
    bottles_cap?: BottleCapCreateNestedManyWithoutControllerInput
  }

  export type ControllerUncheckedCreateInput = {
    code: string
    controllerId?: number
    name: string
    status: boolean
    createdAt?: Date | string
    institutionId: number
    bottles_cap?: BottleCapUncheckedCreateNestedManyWithoutControllerInput
  }

  export type ControllerUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    controllerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Institution?: InstitutionUpdateOneRequiredWithoutControllersNestedInput
    bottles_cap?: BottleCapUpdateManyWithoutControllerNestedInput
  }

  export type ControllerUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    controllerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionId?: IntFieldUpdateOperationsInput | number
    bottles_cap?: BottleCapUncheckedUpdateManyWithoutControllerNestedInput
  }

  export type ControllerCreateManyInput = {
    code: string
    controllerId?: number
    name: string
    status: boolean
    createdAt?: Date | string
    institutionId: number
  }

  export type ControllerUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    controllerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControllerUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    controllerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionId?: IntFieldUpdateOperationsInput | number
  }

  export type InstitutionCreateInput = {
    name: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    controllers?: ControllerCreateNestedManyWithoutInstitutionInput
    operators?: OperatorCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateInput = {
    institutionId?: number
    name: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    controllers?: ControllerUncheckedCreateNestedManyWithoutInstitutionInput
    operators?: OperatorUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controllers?: ControllerUpdateManyWithoutInstitutionNestedInput
    operators?: OperatorUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateInput = {
    institutionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controllers?: ControllerUncheckedUpdateManyWithoutInstitutionNestedInput
    operators?: OperatorUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionCreateManyInput = {
    institutionId?: number
    name: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstitutionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstitutionUncheckedUpdateManyInput = {
    institutionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatorCreateInput = {
    username: string
    name: string
    password: string
    type?: $Enums.UserType
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Institution?: InstitutionCreateNestedOneWithoutOperatorsInput
  }

  export type OperatorUncheckedCreateInput = {
    operatorId?: number
    username: string
    name: string
    password: string
    type?: $Enums.UserType
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    institutionId?: number | null
  }

  export type OperatorUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Institution?: InstitutionUpdateOneWithoutOperatorsNestedInput
  }

  export type OperatorUncheckedUpdateInput = {
    operatorId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OperatorCreateManyInput = {
    operatorId?: number
    username: string
    name: string
    password: string
    type?: $Enums.UserType
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    institutionId?: number | null
  }

  export type OperatorUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatorUncheckedUpdateManyInput = {
    operatorId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ControllerScalarRelationFilter = {
    is?: ControllerWhereInput
    isNot?: ControllerWhereInput
  }

  export type BottleCapCountOrderByAggregateInput = {
    bottleCapId?: SortOrder
    createdAt?: SortOrder
    controllerCode?: SortOrder
  }

  export type BottleCapAvgOrderByAggregateInput = {
    bottleCapId?: SortOrder
  }

  export type BottleCapMaxOrderByAggregateInput = {
    bottleCapId?: SortOrder
    createdAt?: SortOrder
    controllerCode?: SortOrder
  }

  export type BottleCapMinOrderByAggregateInput = {
    bottleCapId?: SortOrder
    createdAt?: SortOrder
    controllerCode?: SortOrder
  }

  export type BottleCapSumOrderByAggregateInput = {
    bottleCapId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type InstitutionScalarRelationFilter = {
    is?: InstitutionWhereInput
    isNot?: InstitutionWhereInput
  }

  export type BottleCapListRelationFilter = {
    every?: BottleCapWhereInput
    some?: BottleCapWhereInput
    none?: BottleCapWhereInput
  }

  export type BottleCapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ControllerCountOrderByAggregateInput = {
    code?: SortOrder
    controllerId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    institutionId?: SortOrder
  }

  export type ControllerAvgOrderByAggregateInput = {
    controllerId?: SortOrder
    institutionId?: SortOrder
  }

  export type ControllerMaxOrderByAggregateInput = {
    code?: SortOrder
    controllerId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    institutionId?: SortOrder
  }

  export type ControllerMinOrderByAggregateInput = {
    code?: SortOrder
    controllerId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    institutionId?: SortOrder
  }

  export type ControllerSumOrderByAggregateInput = {
    controllerId?: SortOrder
    institutionId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ControllerListRelationFilter = {
    every?: ControllerWhereInput
    some?: ControllerWhereInput
    none?: ControllerWhereInput
  }

  export type OperatorListRelationFilter = {
    every?: OperatorWhereInput
    some?: OperatorWhereInput
    none?: OperatorWhereInput
  }

  export type ControllerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OperatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstitutionCountOrderByAggregateInput = {
    institutionId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstitutionAvgOrderByAggregateInput = {
    institutionId?: SortOrder
  }

  export type InstitutionMaxOrderByAggregateInput = {
    institutionId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstitutionMinOrderByAggregateInput = {
    institutionId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstitutionSumOrderByAggregateInput = {
    institutionId?: SortOrder
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type InstitutionNullableScalarRelationFilter = {
    is?: InstitutionWhereInput | null
    isNot?: InstitutionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OperatorCountOrderByAggregateInput = {
    operatorId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    institutionId?: SortOrder
  }

  export type OperatorAvgOrderByAggregateInput = {
    operatorId?: SortOrder
    institutionId?: SortOrder
  }

  export type OperatorMaxOrderByAggregateInput = {
    operatorId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    institutionId?: SortOrder
  }

  export type OperatorMinOrderByAggregateInput = {
    operatorId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    institutionId?: SortOrder
  }

  export type OperatorSumOrderByAggregateInput = {
    operatorId?: SortOrder
    institutionId?: SortOrder
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ControllerCreateNestedOneWithoutBottles_capInput = {
    create?: XOR<ControllerCreateWithoutBottles_capInput, ControllerUncheckedCreateWithoutBottles_capInput>
    connectOrCreate?: ControllerCreateOrConnectWithoutBottles_capInput
    connect?: ControllerWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ControllerUpdateOneRequiredWithoutBottles_capNestedInput = {
    create?: XOR<ControllerCreateWithoutBottles_capInput, ControllerUncheckedCreateWithoutBottles_capInput>
    connectOrCreate?: ControllerCreateOrConnectWithoutBottles_capInput
    upsert?: ControllerUpsertWithoutBottles_capInput
    connect?: ControllerWhereUniqueInput
    update?: XOR<XOR<ControllerUpdateToOneWithWhereWithoutBottles_capInput, ControllerUpdateWithoutBottles_capInput>, ControllerUncheckedUpdateWithoutBottles_capInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type InstitutionCreateNestedOneWithoutControllersInput = {
    create?: XOR<InstitutionCreateWithoutControllersInput, InstitutionUncheckedCreateWithoutControllersInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutControllersInput
    connect?: InstitutionWhereUniqueInput
  }

  export type BottleCapCreateNestedManyWithoutControllerInput = {
    create?: XOR<BottleCapCreateWithoutControllerInput, BottleCapUncheckedCreateWithoutControllerInput> | BottleCapCreateWithoutControllerInput[] | BottleCapUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: BottleCapCreateOrConnectWithoutControllerInput | BottleCapCreateOrConnectWithoutControllerInput[]
    createMany?: BottleCapCreateManyControllerInputEnvelope
    connect?: BottleCapWhereUniqueInput | BottleCapWhereUniqueInput[]
  }

  export type BottleCapUncheckedCreateNestedManyWithoutControllerInput = {
    create?: XOR<BottleCapCreateWithoutControllerInput, BottleCapUncheckedCreateWithoutControllerInput> | BottleCapCreateWithoutControllerInput[] | BottleCapUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: BottleCapCreateOrConnectWithoutControllerInput | BottleCapCreateOrConnectWithoutControllerInput[]
    createMany?: BottleCapCreateManyControllerInputEnvelope
    connect?: BottleCapWhereUniqueInput | BottleCapWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type InstitutionUpdateOneRequiredWithoutControllersNestedInput = {
    create?: XOR<InstitutionCreateWithoutControllersInput, InstitutionUncheckedCreateWithoutControllersInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutControllersInput
    upsert?: InstitutionUpsertWithoutControllersInput
    connect?: InstitutionWhereUniqueInput
    update?: XOR<XOR<InstitutionUpdateToOneWithWhereWithoutControllersInput, InstitutionUpdateWithoutControllersInput>, InstitutionUncheckedUpdateWithoutControllersInput>
  }

  export type BottleCapUpdateManyWithoutControllerNestedInput = {
    create?: XOR<BottleCapCreateWithoutControllerInput, BottleCapUncheckedCreateWithoutControllerInput> | BottleCapCreateWithoutControllerInput[] | BottleCapUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: BottleCapCreateOrConnectWithoutControllerInput | BottleCapCreateOrConnectWithoutControllerInput[]
    upsert?: BottleCapUpsertWithWhereUniqueWithoutControllerInput | BottleCapUpsertWithWhereUniqueWithoutControllerInput[]
    createMany?: BottleCapCreateManyControllerInputEnvelope
    set?: BottleCapWhereUniqueInput | BottleCapWhereUniqueInput[]
    disconnect?: BottleCapWhereUniqueInput | BottleCapWhereUniqueInput[]
    delete?: BottleCapWhereUniqueInput | BottleCapWhereUniqueInput[]
    connect?: BottleCapWhereUniqueInput | BottleCapWhereUniqueInput[]
    update?: BottleCapUpdateWithWhereUniqueWithoutControllerInput | BottleCapUpdateWithWhereUniqueWithoutControllerInput[]
    updateMany?: BottleCapUpdateManyWithWhereWithoutControllerInput | BottleCapUpdateManyWithWhereWithoutControllerInput[]
    deleteMany?: BottleCapScalarWhereInput | BottleCapScalarWhereInput[]
  }

  export type BottleCapUncheckedUpdateManyWithoutControllerNestedInput = {
    create?: XOR<BottleCapCreateWithoutControllerInput, BottleCapUncheckedCreateWithoutControllerInput> | BottleCapCreateWithoutControllerInput[] | BottleCapUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: BottleCapCreateOrConnectWithoutControllerInput | BottleCapCreateOrConnectWithoutControllerInput[]
    upsert?: BottleCapUpsertWithWhereUniqueWithoutControllerInput | BottleCapUpsertWithWhereUniqueWithoutControllerInput[]
    createMany?: BottleCapCreateManyControllerInputEnvelope
    set?: BottleCapWhereUniqueInput | BottleCapWhereUniqueInput[]
    disconnect?: BottleCapWhereUniqueInput | BottleCapWhereUniqueInput[]
    delete?: BottleCapWhereUniqueInput | BottleCapWhereUniqueInput[]
    connect?: BottleCapWhereUniqueInput | BottleCapWhereUniqueInput[]
    update?: BottleCapUpdateWithWhereUniqueWithoutControllerInput | BottleCapUpdateWithWhereUniqueWithoutControllerInput[]
    updateMany?: BottleCapUpdateManyWithWhereWithoutControllerInput | BottleCapUpdateManyWithWhereWithoutControllerInput[]
    deleteMany?: BottleCapScalarWhereInput | BottleCapScalarWhereInput[]
  }

  export type ControllerCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<ControllerCreateWithoutInstitutionInput, ControllerUncheckedCreateWithoutInstitutionInput> | ControllerCreateWithoutInstitutionInput[] | ControllerUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: ControllerCreateOrConnectWithoutInstitutionInput | ControllerCreateOrConnectWithoutInstitutionInput[]
    createMany?: ControllerCreateManyInstitutionInputEnvelope
    connect?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
  }

  export type OperatorCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<OperatorCreateWithoutInstitutionInput, OperatorUncheckedCreateWithoutInstitutionInput> | OperatorCreateWithoutInstitutionInput[] | OperatorUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: OperatorCreateOrConnectWithoutInstitutionInput | OperatorCreateOrConnectWithoutInstitutionInput[]
    createMany?: OperatorCreateManyInstitutionInputEnvelope
    connect?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
  }

  export type ControllerUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<ControllerCreateWithoutInstitutionInput, ControllerUncheckedCreateWithoutInstitutionInput> | ControllerCreateWithoutInstitutionInput[] | ControllerUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: ControllerCreateOrConnectWithoutInstitutionInput | ControllerCreateOrConnectWithoutInstitutionInput[]
    createMany?: ControllerCreateManyInstitutionInputEnvelope
    connect?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
  }

  export type OperatorUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<OperatorCreateWithoutInstitutionInput, OperatorUncheckedCreateWithoutInstitutionInput> | OperatorCreateWithoutInstitutionInput[] | OperatorUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: OperatorCreateOrConnectWithoutInstitutionInput | OperatorCreateOrConnectWithoutInstitutionInput[]
    createMany?: OperatorCreateManyInstitutionInputEnvelope
    connect?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
  }

  export type ControllerUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<ControllerCreateWithoutInstitutionInput, ControllerUncheckedCreateWithoutInstitutionInput> | ControllerCreateWithoutInstitutionInput[] | ControllerUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: ControllerCreateOrConnectWithoutInstitutionInput | ControllerCreateOrConnectWithoutInstitutionInput[]
    upsert?: ControllerUpsertWithWhereUniqueWithoutInstitutionInput | ControllerUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: ControllerCreateManyInstitutionInputEnvelope
    set?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
    disconnect?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
    delete?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
    connect?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
    update?: ControllerUpdateWithWhereUniqueWithoutInstitutionInput | ControllerUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: ControllerUpdateManyWithWhereWithoutInstitutionInput | ControllerUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: ControllerScalarWhereInput | ControllerScalarWhereInput[]
  }

  export type OperatorUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<OperatorCreateWithoutInstitutionInput, OperatorUncheckedCreateWithoutInstitutionInput> | OperatorCreateWithoutInstitutionInput[] | OperatorUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: OperatorCreateOrConnectWithoutInstitutionInput | OperatorCreateOrConnectWithoutInstitutionInput[]
    upsert?: OperatorUpsertWithWhereUniqueWithoutInstitutionInput | OperatorUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: OperatorCreateManyInstitutionInputEnvelope
    set?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
    disconnect?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
    delete?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
    connect?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
    update?: OperatorUpdateWithWhereUniqueWithoutInstitutionInput | OperatorUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: OperatorUpdateManyWithWhereWithoutInstitutionInput | OperatorUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: OperatorScalarWhereInput | OperatorScalarWhereInput[]
  }

  export type ControllerUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<ControllerCreateWithoutInstitutionInput, ControllerUncheckedCreateWithoutInstitutionInput> | ControllerCreateWithoutInstitutionInput[] | ControllerUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: ControllerCreateOrConnectWithoutInstitutionInput | ControllerCreateOrConnectWithoutInstitutionInput[]
    upsert?: ControllerUpsertWithWhereUniqueWithoutInstitutionInput | ControllerUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: ControllerCreateManyInstitutionInputEnvelope
    set?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
    disconnect?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
    delete?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
    connect?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
    update?: ControllerUpdateWithWhereUniqueWithoutInstitutionInput | ControllerUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: ControllerUpdateManyWithWhereWithoutInstitutionInput | ControllerUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: ControllerScalarWhereInput | ControllerScalarWhereInput[]
  }

  export type OperatorUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<OperatorCreateWithoutInstitutionInput, OperatorUncheckedCreateWithoutInstitutionInput> | OperatorCreateWithoutInstitutionInput[] | OperatorUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: OperatorCreateOrConnectWithoutInstitutionInput | OperatorCreateOrConnectWithoutInstitutionInput[]
    upsert?: OperatorUpsertWithWhereUniqueWithoutInstitutionInput | OperatorUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: OperatorCreateManyInstitutionInputEnvelope
    set?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
    disconnect?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
    delete?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
    connect?: OperatorWhereUniqueInput | OperatorWhereUniqueInput[]
    update?: OperatorUpdateWithWhereUniqueWithoutInstitutionInput | OperatorUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: OperatorUpdateManyWithWhereWithoutInstitutionInput | OperatorUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: OperatorScalarWhereInput | OperatorScalarWhereInput[]
  }

  export type InstitutionCreateNestedOneWithoutOperatorsInput = {
    create?: XOR<InstitutionCreateWithoutOperatorsInput, InstitutionUncheckedCreateWithoutOperatorsInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutOperatorsInput
    connect?: InstitutionWhereUniqueInput
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type InstitutionUpdateOneWithoutOperatorsNestedInput = {
    create?: XOR<InstitutionCreateWithoutOperatorsInput, InstitutionUncheckedCreateWithoutOperatorsInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutOperatorsInput
    upsert?: InstitutionUpsertWithoutOperatorsInput
    disconnect?: InstitutionWhereInput | boolean
    delete?: InstitutionWhereInput | boolean
    connect?: InstitutionWhereUniqueInput
    update?: XOR<XOR<InstitutionUpdateToOneWithWhereWithoutOperatorsInput, InstitutionUpdateWithoutOperatorsInput>, InstitutionUncheckedUpdateWithoutOperatorsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ControllerCreateWithoutBottles_capInput = {
    code: string
    controllerId?: number
    name: string
    status: boolean
    createdAt?: Date | string
    Institution: InstitutionCreateNestedOneWithoutControllersInput
  }

  export type ControllerUncheckedCreateWithoutBottles_capInput = {
    code: string
    controllerId?: number
    name: string
    status: boolean
    createdAt?: Date | string
    institutionId: number
  }

  export type ControllerCreateOrConnectWithoutBottles_capInput = {
    where: ControllerWhereUniqueInput
    create: XOR<ControllerCreateWithoutBottles_capInput, ControllerUncheckedCreateWithoutBottles_capInput>
  }

  export type ControllerUpsertWithoutBottles_capInput = {
    update: XOR<ControllerUpdateWithoutBottles_capInput, ControllerUncheckedUpdateWithoutBottles_capInput>
    create: XOR<ControllerCreateWithoutBottles_capInput, ControllerUncheckedCreateWithoutBottles_capInput>
    where?: ControllerWhereInput
  }

  export type ControllerUpdateToOneWithWhereWithoutBottles_capInput = {
    where?: ControllerWhereInput
    data: XOR<ControllerUpdateWithoutBottles_capInput, ControllerUncheckedUpdateWithoutBottles_capInput>
  }

  export type ControllerUpdateWithoutBottles_capInput = {
    code?: StringFieldUpdateOperationsInput | string
    controllerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Institution?: InstitutionUpdateOneRequiredWithoutControllersNestedInput
  }

  export type ControllerUncheckedUpdateWithoutBottles_capInput = {
    code?: StringFieldUpdateOperationsInput | string
    controllerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionId?: IntFieldUpdateOperationsInput | number
  }

  export type InstitutionCreateWithoutControllersInput = {
    name: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    operators?: OperatorCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutControllersInput = {
    institutionId?: number
    name: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    operators?: OperatorUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutControllersInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutControllersInput, InstitutionUncheckedCreateWithoutControllersInput>
  }

  export type BottleCapCreateWithoutControllerInput = {
    createdAt?: Date | string
  }

  export type BottleCapUncheckedCreateWithoutControllerInput = {
    bottleCapId?: number
    createdAt?: Date | string
  }

  export type BottleCapCreateOrConnectWithoutControllerInput = {
    where: BottleCapWhereUniqueInput
    create: XOR<BottleCapCreateWithoutControllerInput, BottleCapUncheckedCreateWithoutControllerInput>
  }

  export type BottleCapCreateManyControllerInputEnvelope = {
    data: BottleCapCreateManyControllerInput | BottleCapCreateManyControllerInput[]
    skipDuplicates?: boolean
  }

  export type InstitutionUpsertWithoutControllersInput = {
    update: XOR<InstitutionUpdateWithoutControllersInput, InstitutionUncheckedUpdateWithoutControllersInput>
    create: XOR<InstitutionCreateWithoutControllersInput, InstitutionUncheckedCreateWithoutControllersInput>
    where?: InstitutionWhereInput
  }

  export type InstitutionUpdateToOneWithWhereWithoutControllersInput = {
    where?: InstitutionWhereInput
    data: XOR<InstitutionUpdateWithoutControllersInput, InstitutionUncheckedUpdateWithoutControllersInput>
  }

  export type InstitutionUpdateWithoutControllersInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operators?: OperatorUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutControllersInput = {
    institutionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operators?: OperatorUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type BottleCapUpsertWithWhereUniqueWithoutControllerInput = {
    where: BottleCapWhereUniqueInput
    update: XOR<BottleCapUpdateWithoutControllerInput, BottleCapUncheckedUpdateWithoutControllerInput>
    create: XOR<BottleCapCreateWithoutControllerInput, BottleCapUncheckedCreateWithoutControllerInput>
  }

  export type BottleCapUpdateWithWhereUniqueWithoutControllerInput = {
    where: BottleCapWhereUniqueInput
    data: XOR<BottleCapUpdateWithoutControllerInput, BottleCapUncheckedUpdateWithoutControllerInput>
  }

  export type BottleCapUpdateManyWithWhereWithoutControllerInput = {
    where: BottleCapScalarWhereInput
    data: XOR<BottleCapUpdateManyMutationInput, BottleCapUncheckedUpdateManyWithoutControllerInput>
  }

  export type BottleCapScalarWhereInput = {
    AND?: BottleCapScalarWhereInput | BottleCapScalarWhereInput[]
    OR?: BottleCapScalarWhereInput[]
    NOT?: BottleCapScalarWhereInput | BottleCapScalarWhereInput[]
    bottleCapId?: IntFilter<"BottleCap"> | number
    createdAt?: DateTimeFilter<"BottleCap"> | Date | string
    controllerCode?: StringFilter<"BottleCap"> | string
  }

  export type ControllerCreateWithoutInstitutionInput = {
    code: string
    controllerId?: number
    name: string
    status: boolean
    createdAt?: Date | string
    bottles_cap?: BottleCapCreateNestedManyWithoutControllerInput
  }

  export type ControllerUncheckedCreateWithoutInstitutionInput = {
    code: string
    controllerId?: number
    name: string
    status: boolean
    createdAt?: Date | string
    bottles_cap?: BottleCapUncheckedCreateNestedManyWithoutControllerInput
  }

  export type ControllerCreateOrConnectWithoutInstitutionInput = {
    where: ControllerWhereUniqueInput
    create: XOR<ControllerCreateWithoutInstitutionInput, ControllerUncheckedCreateWithoutInstitutionInput>
  }

  export type ControllerCreateManyInstitutionInputEnvelope = {
    data: ControllerCreateManyInstitutionInput | ControllerCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type OperatorCreateWithoutInstitutionInput = {
    username: string
    name: string
    password: string
    type?: $Enums.UserType
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperatorUncheckedCreateWithoutInstitutionInput = {
    operatorId?: number
    username: string
    name: string
    password: string
    type?: $Enums.UserType
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperatorCreateOrConnectWithoutInstitutionInput = {
    where: OperatorWhereUniqueInput
    create: XOR<OperatorCreateWithoutInstitutionInput, OperatorUncheckedCreateWithoutInstitutionInput>
  }

  export type OperatorCreateManyInstitutionInputEnvelope = {
    data: OperatorCreateManyInstitutionInput | OperatorCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type ControllerUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: ControllerWhereUniqueInput
    update: XOR<ControllerUpdateWithoutInstitutionInput, ControllerUncheckedUpdateWithoutInstitutionInput>
    create: XOR<ControllerCreateWithoutInstitutionInput, ControllerUncheckedCreateWithoutInstitutionInput>
  }

  export type ControllerUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: ControllerWhereUniqueInput
    data: XOR<ControllerUpdateWithoutInstitutionInput, ControllerUncheckedUpdateWithoutInstitutionInput>
  }

  export type ControllerUpdateManyWithWhereWithoutInstitutionInput = {
    where: ControllerScalarWhereInput
    data: XOR<ControllerUpdateManyMutationInput, ControllerUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type ControllerScalarWhereInput = {
    AND?: ControllerScalarWhereInput | ControllerScalarWhereInput[]
    OR?: ControllerScalarWhereInput[]
    NOT?: ControllerScalarWhereInput | ControllerScalarWhereInput[]
    code?: StringFilter<"Controller"> | string
    controllerId?: IntFilter<"Controller"> | number
    name?: StringFilter<"Controller"> | string
    status?: BoolFilter<"Controller"> | boolean
    createdAt?: DateTimeFilter<"Controller"> | Date | string
    institutionId?: IntFilter<"Controller"> | number
  }

  export type OperatorUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: OperatorWhereUniqueInput
    update: XOR<OperatorUpdateWithoutInstitutionInput, OperatorUncheckedUpdateWithoutInstitutionInput>
    create: XOR<OperatorCreateWithoutInstitutionInput, OperatorUncheckedCreateWithoutInstitutionInput>
  }

  export type OperatorUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: OperatorWhereUniqueInput
    data: XOR<OperatorUpdateWithoutInstitutionInput, OperatorUncheckedUpdateWithoutInstitutionInput>
  }

  export type OperatorUpdateManyWithWhereWithoutInstitutionInput = {
    where: OperatorScalarWhereInput
    data: XOR<OperatorUpdateManyMutationInput, OperatorUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type OperatorScalarWhereInput = {
    AND?: OperatorScalarWhereInput | OperatorScalarWhereInput[]
    OR?: OperatorScalarWhereInput[]
    NOT?: OperatorScalarWhereInput | OperatorScalarWhereInput[]
    operatorId?: IntFilter<"Operator"> | number
    username?: StringFilter<"Operator"> | string
    name?: StringFilter<"Operator"> | string
    password?: StringFilter<"Operator"> | string
    type?: EnumUserTypeFilter<"Operator"> | $Enums.UserType
    status?: BoolFilter<"Operator"> | boolean
    createdAt?: DateTimeFilter<"Operator"> | Date | string
    updatedAt?: DateTimeFilter<"Operator"> | Date | string
    institutionId?: IntNullableFilter<"Operator"> | number | null
  }

  export type InstitutionCreateWithoutOperatorsInput = {
    name: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    controllers?: ControllerCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutOperatorsInput = {
    institutionId?: number
    name: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    controllers?: ControllerUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutOperatorsInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutOperatorsInput, InstitutionUncheckedCreateWithoutOperatorsInput>
  }

  export type InstitutionUpsertWithoutOperatorsInput = {
    update: XOR<InstitutionUpdateWithoutOperatorsInput, InstitutionUncheckedUpdateWithoutOperatorsInput>
    create: XOR<InstitutionCreateWithoutOperatorsInput, InstitutionUncheckedCreateWithoutOperatorsInput>
    where?: InstitutionWhereInput
  }

  export type InstitutionUpdateToOneWithWhereWithoutOperatorsInput = {
    where?: InstitutionWhereInput
    data: XOR<InstitutionUpdateWithoutOperatorsInput, InstitutionUncheckedUpdateWithoutOperatorsInput>
  }

  export type InstitutionUpdateWithoutOperatorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controllers?: ControllerUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutOperatorsInput = {
    institutionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controllers?: ControllerUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type BottleCapCreateManyControllerInput = {
    bottleCapId?: number
    createdAt?: Date | string
  }

  export type BottleCapUpdateWithoutControllerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BottleCapUncheckedUpdateWithoutControllerInput = {
    bottleCapId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BottleCapUncheckedUpdateManyWithoutControllerInput = {
    bottleCapId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControllerCreateManyInstitutionInput = {
    code: string
    controllerId?: number
    name: string
    status: boolean
    createdAt?: Date | string
  }

  export type OperatorCreateManyInstitutionInput = {
    operatorId?: number
    username: string
    name: string
    password: string
    type?: $Enums.UserType
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ControllerUpdateWithoutInstitutionInput = {
    code?: StringFieldUpdateOperationsInput | string
    controllerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bottles_cap?: BottleCapUpdateManyWithoutControllerNestedInput
  }

  export type ControllerUncheckedUpdateWithoutInstitutionInput = {
    code?: StringFieldUpdateOperationsInput | string
    controllerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bottles_cap?: BottleCapUncheckedUpdateManyWithoutControllerNestedInput
  }

  export type ControllerUncheckedUpdateManyWithoutInstitutionInput = {
    code?: StringFieldUpdateOperationsInput | string
    controllerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatorUpdateWithoutInstitutionInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatorUncheckedUpdateWithoutInstitutionInput = {
    operatorId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatorUncheckedUpdateManyWithoutInstitutionInput = {
    operatorId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}