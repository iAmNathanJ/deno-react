.PHONY: start

start:
	deno --allow-net --allow-read --importmap=importmap.server.json ./server.ts
