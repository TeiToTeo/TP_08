const Palabras = ({palabra})=>
{
    <div className="Palabra"> 
<span {palabra.letra1}></span>
<span {palabra.letra2}></span>
<span {palabra.letra3}></span>
<span {palabra.letra4}></span>
<span {palabra.letra5}></span>
</div>
}
export default Palabras;