#pragma strict

var speed:Number = 20;

function Start () {

}

function Update () {

transform.Translate(Vector3.forward * Time.smoothDeltaTime * speed);

}

function OnCollisionEnter(other:Collision)
{
	if(other.transform.tag != "ignore" && other.transform.tag != "bullet" && other.transform.tag != "Player")
	{
		Destroy(transform.gameObject);
	}
}