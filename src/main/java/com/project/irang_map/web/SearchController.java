package com.project.irang_map.web;

import com.project.irang_map.domain.KidsmapRepository;
import com.project.irang_map.dto.KidsmapDto;

import com.project.irang_map.service.KidsmapService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class SearchController {
    private final KidsmapService kidsmapService;
    //@PostMapping("/search")
    @RequestMapping(value="/search", method=RequestMethod.POST)
    public List<KidsmapDto> serch(@RequestParam(value = "juso") String juso){
        //return "입력한 주소는?" + juso; //입력한 값 확인용
        return kidsmapService.findAllByAddr(juso);
    }
}
