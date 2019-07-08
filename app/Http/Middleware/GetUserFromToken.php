<?php

namespace App\Http\Middleware;

use Closure;

class GetUserFromToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!$token = $this->auth->setRequest($request)->getToken()) {
            return $this->respond('tymon.jwt.absent', 'token_not_provided', 401);
        }
        $user = $this->auth->authenticate($token);
        if (!$user) {
            return $this->respond('tymon.jwt.user_not_found', 'user_not_found', 401);
        }
        
        $this->events->dispatch('tymon.jwt.valid', $user);

        return $next($request);
    }
}
