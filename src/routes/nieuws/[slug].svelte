<script>
	import { useQuery } from '@sveltestack/svelte-query';
	const url = 'http://localhost:1337/graphql';

	const queryResults = useQuery('nieuwsData', () => {
		return fetch('http://localhost:1337/graphql').then((res) => res.json());
	});
</script>
