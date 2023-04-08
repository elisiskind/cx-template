import * as chalk from "chalk";

export class Log {
  static debug = (message: string, ...more: any[]) => {
    console.debug(chalk.bgWhite.black(" DEBUG "), message, ...more);
  };
  static info = (message: string, ...more: any[]) => {
    const prettyMessage = chalk.bgGreen(
      " " + message + (more.length > 0 ? " \n" : " ")
    );
    console.info(chalk.bgGreenBright(" INFO  "), prettyMessage, ...more);
  };

  static warn = (message: string, ...more: any[]) => {
    const prettyMessage = chalk.bgYellow(
      " " + message + (more.length > 0 ? " \n" : " ")
    );
    console.warn(chalk.bgYellowBright(" WARN  "), prettyMessage, ...more);
  };
  static error = (message: string, ...more: any[]) => {
    const prettyMessage = chalk.bgRed(
      " " + message + (more.length > 0 ? " \n" : " ")
    );
    console.error(
      chalk.bgRedBright.whiteBright(" ERROR "),
      prettyMessage,
      ...more
    );
  };
}
