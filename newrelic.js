/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name : ['My Application'],
  /**
   * Your New Relic license key.
   */
  license_key : 'b8986a78fc4f77581937a622410e323550aa2c0f',
/* for production  license_key : 'b8986a78fc4f77581937a622410e323550aa2c0f', */
  logging : {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level : 'trace'
  }
};
