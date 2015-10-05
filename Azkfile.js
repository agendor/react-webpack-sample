/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */
systems({  
  'app-builder': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: {"docker": "azukiapp/node:0.12"},
    // Steps to execute before running instances
    provision: [
      "npm install"
    ],
    workdir: "/azk/#{manifest.dir}",
    shell: "/bin/bash",
    command: "npm start",
    mounts: {
      '/azk/#{manifest.dir}': sync("."),
      '/azk/#{manifest.dir}/node_modules': persistent("./node_modules"),
      '/azk/#{manifest.dir}/public/build': persistent("./public/build")
    },
    envs: {
      // Make sure that the PORT value is the same as the one
      // in ports/http below, and that it's also the same
      // if you're setting it in a .env file
      PATH: "/azk/#{manifest.dir}/node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
      NODE_ENV: "dev"
    },
  },
  'app-cdn': {
    depends: [],
    image: {"dockerfile": "./docker/app-cdn/Dockerfile"},
    shell: "/bin/bash",
    mounts: {
      '/azk/#{system.name}': sync("./public"),
      '/azk/#{system.name}/build': persistent("./public/build")
    },
    http: {
      domains: [ "#{system.name}.#{azk.default_domain}" ]
    },
    ports: {
      http: "8008/tcp"
    }
  }
});
