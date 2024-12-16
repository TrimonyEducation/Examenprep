<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class SubscriptionController extends Controller
{
    public function createCheckoutSession(Request $request)
    {
        try {
            $user = $request->user();
            $priceId = $request->priceId;
            $mode = $request->mode;
             $quantity = 1;

            Log::info('Creating checkout session for user:', [
                'user_id' => $user->id,
                'mode' => $mode,
                'priceId' => $priceId
            ]);

            if ($mode == 'recurring')
            {
                $checkout = $user->newSubscription('default', $priceId)
                    ->checkout([
                        'success_url' => route('dashboard'),
                        'cancel_url' => route('pricing'),
                        'payment_method_types' => ['ideal'],
                        'locale' => 'nl',
                    ]);
            }

            if ($mode == 'one_time')
            {
               $checkout = $user->checkout([$priceId => $quantity], [
                    'success_url' => route('dashboard'),
                    'cancel_url' => route('pricing'),
                    'payment_method_types' => ['ideal'],
                    'locale' => 'nl',
                ]);
            }

            Log::info('Checkout session created:', ['checkout_url' => $checkout->url]);
            return Inertia::location($checkout->url);

        } catch (\Exception $e) {
            Log::error('Checkout error:', ['error' => $e->getMessage()]);
            return back()->withErrors(['error' => 'Could not create checkout session']);
        }
    }
}
