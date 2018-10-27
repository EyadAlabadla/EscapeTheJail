#pragma strict

var button:GameObject;
var green:Material;

function Start () {
	button.gameObject.renderer.material.color = Color.red;
}

function Update () {

}

function OnCollisionEnter(other:Collision)
{
	if(other.gameObject.tag == "bullet")
	{
		button.gameObject.renderer.material.color = Color.green;
	}
}