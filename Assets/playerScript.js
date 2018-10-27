#pragma strict

var bullet:GameObject;
var cross:Texture2D;
var cam:Transform;
var hit : RaycastHit;
var button:Transform;
var jail:Transform;

function Start () {

}

function Update () {
	
	if(Input.GetMouseButtonDown(0))
	{
		Physics.Raycast(cam.position,cam.forward,hit);
		Debug.Log(hit.point);
		if(hit.transform.tag == "button")
		{
			if(button.renderer.material.color == Color.red)
			{
				button.renderer.material.color = Color.green;
				jail.animation.Play("openJail");
			}
		}
	}

}

function OnGUI ()
{
    GUI.DrawTexture (Rect (Screen.width/2-25, Screen.height/2-25 , 50, 50),cross);
}