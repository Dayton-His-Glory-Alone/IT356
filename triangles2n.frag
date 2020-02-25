#version 430 core

out vec4 FragColor;
uniform float timeVal;

void main()
{
    FragColor = vec4(timeVal, 1., 0.0, 1.0);
}
