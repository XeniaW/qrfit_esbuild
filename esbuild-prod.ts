import ESbuild  from 'esbuild'
import path from 'path'
import config from './esbuild-config';


ESbuild.build(config)
    .catch(console.log)