// blogs-model.ts - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
import { Application } from '../declarations';
import { Knex } from 'knex';

export default function (app: Application): Knex {
	const db: Knex = app.get('knexClient');
	const tableName = 'blogs';

	return db;
}
