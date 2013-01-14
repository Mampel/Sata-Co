<?php

require_once('inc/db.php');

function show_array($arr){
	echo '<pre>';
	print_r($arr);
	echo '</pre>';
}

function show_table($rows){
	echo '<table border="1" >';

	echo "<tr>";
	foreach($rows[0] as $title=>$fields){
		echo "<th>$title</th>";
	}
	echo "</tr>";

	foreach($rows as $row){
		echo "<tr>";
		foreach($row as $fields){
			echo "<td>$fields</td>";
		}
		echo "</tr>";
	}

	echo '</table>';
}

function show_users($rows){
	echo '<table border="0" >';

	echo "<tr>";
	foreach($rows[0] as $title=>$fields){
		echo "<th>$title</th>";
	}
	echo "</tr>";

	foreach($rows as $row){
		echo "<tr>";
		foreach($row as $title=>$fields){
			if($title == 'img'){
				echo "<td><img src='images/$fields' width='128' height='128' alt='Profile Avatar' title='' /></td>";
			}else{
				echo "<td>$fields</td>";
			}
		}
		echo "</tr>";
	}

	echo '</table>';
}


function show_books($books){
	foreach($books as $book){
		echo "
		<div class='book'>
			<h2 class='title'>$book[name]</h2>
			<img class='pic' src='images/$book[img]' alt='$book[name]' />
			<div class='text'>
				<span class='author'>Author : $book[author]</span>
				$book[desc]
				<span class='price'>$book[price] $</span>
			</div>
			<div class='clear'></div>
		</div>
		";
	}

}

function insert_melk($noe_melk, $noe_vagozari, $melk_metraj, $noe_sanad, $melk_jahat, $melk_sen_bana, $melk_bazsazishode, $melk_ghabelesokonat, $melk_ostan, $melk_shahr, $melk_mahdude, $melk_address, $melk_tabaghe, $melk_pelak, $melk_vahed, $melk_tedade_vahed,$melk_tedad_khab){
	db_query("INSERT INTO melk1 VALUES(NULL, '$noe_melk', '$noe_vagozari', '$melk_metraj', '$noe_sanad', '$melk_jahat', '$melk_sen_bana', '$melk_bazsazishode', '$melk_ghabelesokonat', '$melk_ostan', '$melk_shahr', '$melk_mahdude', '$melk_address', '$melk_tabaghe', '$melk_pelak', '$melk_vahed', '$melk_tedade_vahed', '$melk_tedad_khab')");
}

function insert_member($member_vahed, $member_ozviat, $member_fname, $member_lname, $member_tel, $member_cell, $member_cell2, $member_cell3, $member_address, $member_internet, $member_computer, $member_img){
	db_query("INSERT INTO member1 VALUES(NULL, '$member_vahed', '$member_ozviat', '$member_fname', '$member_lname', '$member_tel', '$member_cell', '$member_cell2', '$member_cell3', '$member_address', '$member_internet', '$member_computer', '$member_img')");
}