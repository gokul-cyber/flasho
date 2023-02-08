import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    }
  },

  env: {
    'admin-secret-key': 'hello@123',
    DB: {
      parameter_type: 'credentials',
      user: 'postgres',
      password: 'FvJuXQ2urcvIMgfDHFX8',
      host: 'devinfluencer.ckiwohkuy8qs.us-east-1.rds.amazonaws.com',
      port: 5432,
      database: 'postgres'
    },
    sns: {
      aws_access_key_id: 'AKIASRTM7OHKF6TKORRZ',
      aws_secret_access_key: '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',
      aws_region: 'us-east-1'
    },
    ses: {
      aws_access_key_id: 'AKIARME6JAOPAKRO27IK',
      aws_secret_access_key: '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',
      aws_region: 'ap-south-1',
      source_email_address: 'pranav@humbee.app'
    }
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
