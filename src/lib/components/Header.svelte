<script>
	import Logo from '../../assets/Logo.svg';
	import { page } from '$app/stores';
</script>

<div class="navbar flex-none w-full pt-6 bg-neutral text-neutral-content z-10">
	<div class="flex-none">
		<label for="mobile-drawer" class="btn btn-circle btn-ghost drawer-button"
			><img src={Logo} alt="" /></label
		>
	</div>
	<div class="flex-1 px-2 mx-2"><span class="text-lg font-bold" /></div>
	<div class="flex-none">
		<button class="btn btn-circle btn-ghost">
			{#if $page.path === '/app/qrscanner'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
						clip-rule="evenodd"
					/>
				</svg>
			{:else}
				<a href="/app/qrscanner">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
				</a>
			{/if}
		</button>
	</div>
</div>
