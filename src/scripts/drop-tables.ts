import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function dropTables() {
  console.log('Dropping tables...');

  const tables = ['reservations', 'rooms', 'users'];

  for (const table of tables) {
    const { error } = await supabase.rpc('exec', {
      sql: `DROP TABLE IF EXISTS ${table} CASCADE;`
    });
    if (error) {
      console.error(`Failed to drop ${table}:`, error);
    } else {
      console.log(`${table} dropped`);
    }
  }

  console.log('All tables dropped!');
}

dropTables().catch(console.error);