const SHEET_ID = process.env.SHEET_ID ?? '';

/**
 * @deprecated should use GOOGLE_CREDENTIAL_JSON instead
 */
const CREDENTIAL_FILE_NAME = process.env.CREDENTIAL_FILE_NAME ?? '';

/**
 * @deprecated should use GOOGLE_CREDENTIAL_JSON instead
 */
const CREDENTIAL = process.env.CREDENTIAL ?? '';

const AUTHORIZATION = process.env.AUTHORIZATION ?? '';

export { SHEET_ID, CREDENTIAL_FILE_NAME, CREDENTIAL, AUTHORIZATION };
