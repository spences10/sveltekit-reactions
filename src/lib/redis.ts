import { REDIS_CONNECTION } from '$env/static/private'
import Redis from 'ioredis'

export default REDIS_CONNECTION
	? new Redis(REDIS_CONNECTION)
	: new Redis()
