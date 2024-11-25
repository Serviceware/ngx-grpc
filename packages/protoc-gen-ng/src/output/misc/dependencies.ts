export class Dependency {

  constructor(
    public from: string,
    public token: string,
    public isType = false,
  ) { }

}

const angularCore = {
  Inject: new Dependency('@angular/core', 'Inject'),
  Injectable: new Dependency('@angular/core', 'Injectable'),
  InjectionToken: new Dependency('@angular/core', 'InjectionToken'),
  Optional: new Dependency('@angular/core', 'Optional'),
};

const ngxGrpcCommon = {
  GrpcCallType: new Dependency('@ngx-grpc/common', 'GrpcCallType'),
  GrpcClient: new Dependency('@ngx-grpc/common', 'GrpcClient', true),
  GrpcClientFactory: new Dependency('@ngx-grpc/common', 'GrpcClientFactory', true),
  GrpcMessage: new Dependency('@ngx-grpc/common', 'GrpcMessage', true),
  GrpcMetadata: new Dependency('@ngx-grpc/common', 'GrpcMetadata'),
  RecursivePartial: new Dependency('@ngx-grpc/common', 'RecursivePartial', true),
  GrpcEvent: new Dependency('@ngx-grpc/common', 'GrpcEvent', true),
  uint8ArrayToBase64: new Dependency('@ngx-grpc/common', 'uint8ArrayToBase64'),
  GrpcMessagePool: new Dependency('@ngx-grpc/common', 'GrpcMessagePool'),
  GrpcMessageClass: new Dependency('@ngx-grpc/common', 'GrpcMessageClass'),
  ToProtobufJSONOptions: new Dependency('@ngx-grpc/common', 'ToProtobufJSONOptions', true),
};

const ngxGrpcCore = {
  GrpcHandler: new Dependency('@ngx-grpc/core', 'GrpcHandler'),
  takeMessages: new Dependency('@ngx-grpc/core', 'takeMessages'),
  throwStatusErrors: new Dependency('@ngx-grpc/core', 'throwStatusErrors'),
  GRPC_CLIENT_FACTORY: new Dependency('@ngx-grpc/core', 'GRPC_CLIENT_FACTORY'),
};

const ngxGrpcWorker = {
  GrpcWorkerServiceClientDef: new Dependency('@ngx-grpc/worker', 'GrpcWorkerServiceClientDef'),
};

const googleProtobuf = {
  BinaryReader: new Dependency('google-protobuf', 'BinaryReader'),
  BinaryWriter: new Dependency('google-protobuf', 'BinaryWriter'),
  ByteSource: new Dependency('google-protobuf', 'ByteSource'),
};

const rxjs = {
  Observable: new Dependency('rxjs', 'Observable'),
};

export const ExternalDependencies = {
  ...angularCore,
  ...googleProtobuf,
  ...ngxGrpcCore,
  ...ngxGrpcCommon,
  ...ngxGrpcWorker,
  ...rxjs,
};
