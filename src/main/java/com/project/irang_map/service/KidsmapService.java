package com.project.irang_map.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.project.irang_map.domain.Kidsmap;
import com.project.irang_map.domain.KidsmapRepository;
import com.project.irang_map.dto.KidsmapDto;
import com.project.irang_map.dto.KidsmapListResponseDto;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class KidsmapService {
    private final KidsmapRepository kidsmapRepository;

    @Transactional(readOnly = true)
    public List<KidsmapListResponseDto> findAll() {
        return kidsmapRepository.findAll().stream()
        .map(KidsmapListResponseDto::new)
        .collect(Collectors.toList());
    }

    @Transactional
    public List<KidsmapDto> searchPosts(String keyword){
        List<Kidsmap> kidsmaps = kidsmapRepository.findByTitleContaining(keyword);
        List<KidsmapDto> kidsmapDtoList = new ArrayList<>();

        if(kidsmaps.isEmpty()) return kidsmapDtoList;

        for(Kidsmap kidsmap : kidsmaps){
            kidsmapDtoList.add(this.convertEntityToDto(kidsmap));
        }
        return kidsmapDtoList;
    }

    private KidsmapDto convertEntityToDto(Kidsmap kidsmap){
        return KidsmapDto.builder()
            .store(kidsmap.getStore())
            .addr(kidsmap.getAddr())
            .category(kidsmap.getCategory())
            .build();

    }

}
