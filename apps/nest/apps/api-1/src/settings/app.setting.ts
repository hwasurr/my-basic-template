import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
// import cookieParser from 'cookie-parser';
import cors from 'cors';
// import csrf from 'csurf';
import express from 'express';
import helmet, { HelmetOptions } from 'helmet';
import passport from 'passport';

export class AppSetting {
  constructor(
    private readonly app: NestExpressApplication,
    private readonly configService: ConfigService,
  ) {}

  private helmetOptions: Readonly<HelmetOptions> = {
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  };

  private corsOptions: Readonly<cors.CorsOptions> = {
    credentials: true,
  };

  private bodyParserJsonOptions: Readonly<Parameters<typeof express.json>[0]> = {
    limit: 1024 * 1024 * 100,
  };

  private bodyParserUrlEncodedOptions: Readonly<
    Parameters<typeof express.urlencoded>[0]
  > = {
    extended: true,
  };

  public initialize(): void {
    this.enableExpressSettings();
    this.initializeMiddlewares();
  }

  private enableExpressSettings() {
    this.app.enable('case sensitive routing');
    this.app.enable('strict routing');
    this.app.enable('trust proxy');
  }

  private initializeMiddlewares() {
    this.app.use(helmet(this.helmetOptions));
    this.app.use(cors(this.corsOptions));
    this.app.use(express.urlencoded(this.bodyParserUrlEncodedOptions));
    this.app.use(express.json(this.bodyParserJsonOptions));
    this.app.use(express.static('public'));
    // this.app.use(cookieParser('@#@$MYSIGN#@$#$'));
    // const __csrf = csrf(csrfConfig);
    // this.app.use((req: Request, res, next) => {
    //   if (!csrfFreeRoutes.includes(req.originalUrl)) {
    //     __csrf(req, res, next);
    //   } else next();
    // });
    // this.app.use(colorizedMorganMiddleware);
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }
}
