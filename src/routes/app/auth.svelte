<script>
	import {
		Auth0Context,
		Auth0LoginButton,
		Auth0LogoutButton,
		authError,
		authToken,
		idToken,
		isAuthenticated,
		isLoading,
		login,
		logout,
		userInfo
	} from '@dopry/svelte-auth0';
</script>

<Auth0Context domain="devenv1.eu.auth0.com" client_id="ByHotM5JrhtGVsdOjmKgKVJItMox4sSz">
	<div class="flex">
		<Auth0LoginButton class="btn" callback_url="https://deruiterstok.nl/app">Login</Auth0LoginButton
		>
		<Auth0LogoutButton class="btn" logout_url="https://deruiterstok.nl/app"
			>Logout</Auth0LogoutButton
		>
	</div>

	<pre>isLoading: {$isLoading}</pre>
	<pre>isAuthenticated: {$isAuthenticated}</pre>
	<pre>authToken: {$authToken}</pre>
	<pre>idToken: {$idToken}</pre>
	<pre>userInfo: {JSON.stringify($userInfo, null, 2)}</pre>
	<pre>authError: {$authError}</pre>
</Auth0Context>
