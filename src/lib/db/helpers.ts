import { sql } from "@vercel/postgres"
import { TableColumns, TableNames, TableOptions } from "../types"
import { seedUser } from "./entities"

export async function fetchData<T>(name: TableNames, selectedRows: TableColumns<T>, options?: TableOptions<T>): Promise<T[] | undefined> {
  try {
    const selectClause = buildSelectClause(selectedRows as string)
    const whereClause = buildWhereClause()
    const orderClause = options?.order !== undefined ? ` ORDER BY ${options.order.field as string} ${options.order.dir}` : ''
    const limitClause = options?.limit !== undefined ? ` LIMIT ${options.limit}` : ''

    console.log(`SELECT ${selectClause} FROM ${name}${orderClause}${whereClause}${limitClause};`)

    const query = await sql<T>`SELECT ${selectClause} FROM ${name}${orderClause}${whereClause}${limitClause};`

    if (query.rowCount === 0 || query.rows[0] === undefined)
      return undefined

    return query.rows
  } catch (error: any) {
    return await checkIfTableExists<T>(error, name, fetchData(name, selectedRows, options))
  }
}

// export async function checkIfTableExists<T>(error: any, name: TableNames, cb: Promise<T[] | void | undefined>): Promise<T[] | void | undefined>
// export async function checkIfTableExists<T>(error: any, name: TableNames, cb: Promise<T | void | undefined>): Promise<T | void | undefined>

async function checkIfTableExists<T>(error: any, name: TableNames, cb: Promise<T[] | undefined>): Promise<T | undefined> {
  if (error.message.includes('relation "' + name + '" does not exist'))
    return await seedUser(cb)
  else
    throw new Error(error.message)
}

function buildSelectClause(selectedRows: string | string[]) {
  if (Array.isArray(selectedRows) === true)
    return selectedRows.join(', ')
  else
    return selectedRows
}

function buildWhereClause<T>(eq: TableOptions<T>['eq'][]) {
  let values: string[] = []

  if (eq.length === 0)
    return ''
  else {
    eq.forEach(item => {
      values.push(` ${item.} = ${item.value}`)
    })
  }

  if (values.length > 1)
    return values.join(', ')
  else
    return values[0]
}