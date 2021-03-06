<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'TestUserHelper',
            'email' => 'test@test.at',
            'password' => bcrypt('123'),
            'isHelper' => true,
            'street' => 'Hinteregasse',
            'streetnumber' => 79,
            'zipcode' => 4020,
            'city' => 'Linz',
        ]);

        DB::table('users')->insert([
            'name' => 'TestUser',
            'email' => 'test@test.work',
            'password' => bcrypt('123'),
            'isHelper' => false,
            'street' => 'Webergasse',
            'streetnumber' => 9,
            'zipcode' => 4020,
            'city' => 'Linz',

        ]);

        DB::table('users')->insert([
            'name' => 'Johannes Reiter',
            'email' => 'johannes@r.at',
            'password' => bcrypt('123'),
            'isHelper' => false,
            'street' => 'Webergasse',
            'streetnumber' => 9,
            'zipcode' => 4020,
            'city' => 'Linz',

        ]);
    }


}
