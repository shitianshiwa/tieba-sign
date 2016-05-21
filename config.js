import path from 'path';
import fs from 'fs';

let SIGN_CONF_PATH = '';

if( process.env.HOME && !process.env.HOMEPATH ) {
	SIGN_CONF_PATH = path.resolve( process.env.HOME, '.tieba-sign' );
} else if( process.env.HOME || process.env.HOMEPATH ) {
	SIGN_CONF_PATH = path.resolve( process.env.HOMEDRIVE, process.env.HOME || process.env.HOMEPATH, '.tieba-sign' );
} else {
	SIGN_CONF_PATH = path.resolve('/etc', '.tieba-sign');
}

export { SIGN_CONF_PATH };
