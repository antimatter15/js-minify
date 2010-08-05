This is a totally experimental prototype of a JS minification system using something I call the DOM Indexer.


But first, for what a minifier is in the first place. Minifiers are compressors. They reduce entropy.
There are different ways to reduce entropy. There are lossy and lossless compression systems. Stripping
whitespace is lossy, as the original whitespace really can't be recovered with certainty. Encoding with
LZ77 is lossless as the code that gets eval'd is bit-for-bit equivalent to the source.

One way of reducing entropy is by creating a dictionary, as what lz77 and pretty much what huffman coding
does as well. You create a dictionary of commonly occuring phrases and stick it somewhere. To decode, you 
replace stuff in the dictionary and that expands the file.

Now, lets analyze what parts of a typical block of code that can and can't be optimized.

    function svg(el, prop){
      if(typeof el == 'string') el = document.createElementNS('http://whateversvgnsthisis.blah', el);
      for(var i in prop){
        el.setAttribute(i, prop[i]);
      }
      return el;
    }


Compilers nowadays, my favorite is Closure, can rewrite local variables to be shorter and do some general optimizations.
like getting rid of the {} when they're unnecessary. Here's the post-closure code.

    function svg(a,b){if(typeof a=="string")a=document.createElementNS("http://whateversvgnsthisis.blah",a);for(var c in b)a.setAttribute(c,b[c]);return a}

It's nice and concise. The parts that aren't obfuscated are: typeof, "string", document.createElementNS, setAttribute, for, and return.

A simple dictionary coder could get rid of the function, for, if and return overhead. It could also get rid of document.creatElementNS, but it would
still at some point need to include that in it's dictionary.

In this minifier, the dictionary isn't transmitted. Instead, it's computed by the DOM Indexer. The DOM Indexer iterates through all properties
2 levels below window and sticks it in a hash table with a crappy simple hash function and the full expanded value. Just do a .replace() to 
encode and another to decode. Simple enough.

It gets compiled to:

    function svg(a,b){if($t4of a=="string")a=$dcElo("http://whateversvgnsthisis.blah",a);for(var c in b)a.$sAtc(c,b[c]);return a}
    
You can see that `typeof` gets mapped to `$t4of` and document.createElementNS gets mapped to `$dcElo` and setAttribute gets mapped to `$sAtc`

How great are the savings? Sadly, not that great. Interesting experiment anyway.
