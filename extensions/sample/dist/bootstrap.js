import { registerJob } from '@evershop/evershop/lib/cronjob';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default function() {
    registerJob({
        name: 'sampleJob',
        schedule: '*/1 * * * *',
        resolve: path.resolve(__dirname, 'crons', 'everyMinute.js'),
        enabled: true
    });
}
