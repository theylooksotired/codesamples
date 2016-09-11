<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class BlogController extends Controller
{
    
	/**
	* @Route("/blog/{page}", name="blog_list", requirements={"page": "\d+"})
	*/
    public function listAction($page=1) {
    	if ($page==666) {
		 throw $this->createNotFoundException('What are you searching for!!??');
		} else {
	    return $this->render('blog/list.html.twig', [
	        'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..'),
	        'page' => $page
	    ]);
    }
    }

	/**
	* @Route("/blog/{slug}", name="blog_show")
	*/
    public function showAction($slug) {
    	$urlMain = 'dsadas'.$this->container->get('router')->generate('blog_list', array('page' => '15'));
        return $this->render('blog/item.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..'),
            'title' => 'Title of the post',
            'url_main'=>$urlMain
        ]);
    }

}
