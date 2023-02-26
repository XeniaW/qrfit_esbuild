import ESbuild, { BuildOptions }  from 'esbuild'
import path from 'path'

const mode = process.env.MODE || 'development';

const isDev = mode === 'development';
const isProd = mode === 'production';

const config: BuildOptions = {
    outdir: path.resolve(__dirname, 'dist'),
    entryNames: '[dir]/bundle.[name]-[hash]',
    entryPoints: [path.resolve(__dirname, 'src', 'index.tsx')],
    allowOverwrite: true,
    bundle: true,
    tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    minify: isProd,
    sourcemap: true,
    loader: {
        '.png': 'file',
        '.svg': 'file',
        '.jpg': 'file',
    },
}

export default config;
