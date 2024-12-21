<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Streak extends Model
{
    protected $fillable = ['user_id', 'start_date', 'end_date', 'current_streak', 'longest_streak'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
