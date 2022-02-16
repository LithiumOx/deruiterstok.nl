<script>
	import Logo from '../public/Logo.svg';
</script>

<div class="bg-neutral rounded-b-xl flex-none text-neutral-content w-full pt-1 pb-1 z-10 navbar">
	<div class="flex-none">
		<a href="/app"
			><label for="mobile-drawer" class="btn btn-circle btn-ghost drawer-button"
				><img src={Logo} alt="" /></label
			></a
		>
	</div>
	<div class="flex-1 mx-2 px-2"><span class="font-bold text-lg" /></div>
	<div class="flex-none">
		<button class="btn btn-circle btn-ghost">
			<a href="/app/profile"
				><svg
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
						d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
					/>
				</svg></a
			>
		</button>
	</div>
</div>
